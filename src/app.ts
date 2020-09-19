import express ,{Application,Request,Response,NextFunction} from 'express';
import { sequelize } from './dbconfig';
import { authRoute } from './routes/auth';
import bodyParser from 'body-parser';
const app:Application= express();
const syncDb =async()=>{
await sequelize.sync({force:true});
console.log("All models were synchronized successfully.");
}
syncDb();
app.use(bodyParser.json());
app.use('/auth',authRoute);

app.listen(3000,()=>{
    console.log("Listening on Port 3000");
})