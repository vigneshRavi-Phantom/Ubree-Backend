import express, { Request, Response, NextFunction } from "express";
import { client } from "../dbconfig";
import { ILoginResponse } from "../interfaces/loginResponse";
import { generateOTP } from "../jobs/generateOtp";
import { ServiceAgentLogin } from "../models/serviceagentlogin.model";
import { User } from "../models/user.model";
import { UserLogin } from "../models/userlogin.model";
const app = express.Router();

app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  const userResponse: ILoginResponse = req.body;

  /*
    Generating OTP
*/
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
          time: new Date().getTime(),
        })
      );
      if (userResponse.userType === 1) {
        UserLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: Date(),
        });
      } else {
        ServiceAgentLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: Date(),
        });
      }
    }
  );
});

export const authRoute = app;
