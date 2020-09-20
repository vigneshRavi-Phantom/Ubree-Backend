import fast2sms from 'fast-two-sms';
export const sendOTP = async(mobileNumber:string,otp:any)=>{
    try {
        const response = await fast2sms.sendMessage({authorization: '2cNu1QswTv60O9iohZxMdV7FDrqzSWaXPJ3nKBkgyAm5YeIt8lEBTZt1okR2Gl4CMfpabxHLqN0UzPF8', message: "The otp is"+otp,numbers:[mobileNumber]});
        console.log(response);
      } catch (err) {
        console.error(err);
      }
}