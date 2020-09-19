import express ,{Request,Response,NextFunction} from 'express';
import {generateOTP} from '../jobs/generateOtp';
import {User} from '../models/userlogin.model';
const app = express.Router();       

app.get('/', async (req:Request,res:Response,next:NextFunction) =>{
const user = await User.create({name:"Johnny"})
res.json(user);
})

export const authRoute = app;
