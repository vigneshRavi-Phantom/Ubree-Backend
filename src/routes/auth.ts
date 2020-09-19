import express, { Request, Response, NextFunction } from "express";
import { lte } from "sequelize/types/lib/operators";
import { client } from "../dbconfig";
import { convertToJson } from "../helpers/parsing";
import { ILoginResponse } from "../interfaces/loginResponse";
import { IOTPValidation } from "../interfaces/otpValidation";
import { generateOTP } from "../jobs/generateOtp";
import { ServiceAgentLogin } from "../models/serviceagentlogin.model";
import { User } from "../models/user.model";
import { UserLogin } from "../models/userlogin.model";
const app = express.Router();

app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  const userResponse: ILoginResponse = req.body;
  //@ts-ignore
  const otpArray: number[] = JSON.parse(await client.getAsync("otpArray"));
  const otp = otpArray.shift();
  client.set("otpArray", JSON.stringify(otpArray));
  if (otpArray.length < 5) {
    generateOTP();
  }

  User.findOne({ where: { mobileNumber: userResponse.phoneNumber } }).then(
    (obj) => {
      let userId: string = "";
      if (obj) {
        res.json({ otp: otp, length: otpArray.length });
      } else {
        User.create({
          mobileNumber: userResponse.phoneNumber,
          userID: userResponse.phoneNumber,
          created: Date(),
          isActive: 1,
        }).then((value) => {
          res.json({ otp: otp, length: otpArray.length });
          userId = value.userID;
        });
      }
      client.set(
        userResponse.phoneNumber,
        JSON.stringify({
          otp: otp,
          time: new Date(),
        })
      );
      if (userResponse.userType === 1) {
        UserLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: new Date(),
        });
      } else {
        ServiceAgentLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: new Date(),
        });
      }
    }
  );
});

app.post("/validate-otp", async (req: Request, res: Response) => {
  const response: IOTPValidation = req.body;
  let data = await (client as any).getAsync(response.phoneNumber);
  const finalData = convertToJson(data);
  if (finalData) {
    if (finalData.otp === response.otp) {
      let now = new Date();
      let then = new Date(finalData.time);
      //@ts-ignore
      let diff: number = now - then;
      if (diff >= 600000) {
        res.json({ badRequest: true });
      } else {
        res.json({ success: true });
      }
    }
    await client.del(response.phoneNumber, function (result, err) {
      console.log(result);
    });
  } else {
    res.sendStatus(500);
  }
});
export const authRoute = app;
