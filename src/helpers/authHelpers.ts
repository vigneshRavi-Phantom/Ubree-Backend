import jwt from 'jsonwebtoken';

export const createToken =(phoneNumber:string,userType:number)=>{
    const tokenDict ={
        phoneNumber:phoneNumber,
        userType:userType
    }
    const token = jwt.sign(tokenDict,(process.env.ACCESS_TOKEN_SECRET as any),{expiresIn:"7d"});
    return token;
}