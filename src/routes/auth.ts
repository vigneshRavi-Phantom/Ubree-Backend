import express ,{Request,Response,NextFunction} from 'express';
import {generateOTP} from '../jobs/generateOtp';
import {UserLogin} from '../models/userlogin.model';
const app = express.Router();       

app.get('/', async (req:Request,res:Response,next:NextFunction) =>{
res.send("hi");

})

export const authRoute = app;
