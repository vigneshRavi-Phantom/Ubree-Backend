import express ,{Application,Request,Response,NextFunction} from 'express';
import { sequelize } from './dbconfig';
import { authRoute } from './routes/auth';

const app:Application= express();
sequelize.sync();
app.use('/auth',authRoute);

app.listen(3000,()=>{
    console.log("Listening on Port 3000");
})