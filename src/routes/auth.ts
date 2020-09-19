import { log } from "console";
import express, { Request, Response, NextFunction } from "express";
import { client } from "../dbconfig";
import { generateOTP } from "../jobs/generateOtp";
import { UserLogin } from "../models/userlogin.model";
const app = express.Router();

app.get("/login", async (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  const otpArray: number[] = JSON.parse(await client.getAsync("otpArray"));
  const otp = otpArray.shift();
  client.set("otpArray", JSON.stringify(otpArray));
  return res.json({
    otp,
    length: otpArray.length,
  });
});

export const authRoute = app;
