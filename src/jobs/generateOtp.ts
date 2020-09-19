
//@ts-ignore
import otpGenerator from "otp-generator";
import {client} from '../dbconfig';

export const generateOTP = () => {
    let LIMIT = 100;
    /*
    Generates OTP and sets in the Redis
    */
  let otpArray: any[] = [];
  while (LIMIT > 0) {
    const otp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
      digits:true,
      alphabets:false,
    });
    otpArray.push(otp); 
    LIMIT--;
  }
  const stringifiedArray = JSON.stringify(otpArray);
  client.set("otpArray", stringifiedArray,function(err,reply){
      console.log(reply);
  });
  return otpArray;
};
