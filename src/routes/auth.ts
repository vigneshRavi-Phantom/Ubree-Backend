import express, { Request, Response, NextFunction } from "express";
import { client } from "../dbconfig";
import { ILoginResponse } from "../interfaces/loginResponse";
import { generateOTP } from "../jobs/generateOtp";
import { User } from "../models/user.model";
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
      if (obj) {
        res.json({ otp: otp ,length:otpArray.length});
      } else {
        User.create({
          mobileNumber: userResponse.phoneNumber,
          userID: userResponse.phoneNumber,
          created: Date(),
          isActive: 1,
        }).then(() => {
          res.json({ otp: otp,length:otpArray.length });
        });
      }
      client.set(userResponse.phoneNumber,JSON.stringify({
        otp:otp,
        time:new Date().getTime()   
      }))
    }
  );
});

export const authRoute = app;
