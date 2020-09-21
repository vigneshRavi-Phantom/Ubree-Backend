import { NextFunction ,Response,Request} from "express";

export const validateToken =(req:Request,res:Response,next:NextFunction)=>{
const authHeader= req.headers.authorization;
const authToken = authHeader && authHeader?.split(' ')[1];
if(!authToken){
    res.status(500).json({message:"Authorization Credentials were not provided"})
}

}