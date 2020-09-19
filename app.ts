import express ,{Application,Request,Response,NextFunction} from 'express';
import { sequelize } from './src/dbconfig';
import { authRoute } from './src/routes/auth';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app:Application= express();
const syncDb =async()=>{
await sequelize.sync({force:true});
console.log("All models were synchronized successfully.");
}
syncDb();
app.use(bodyParser.json());
app.use('/auth',authRoute);
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.listen(3000,()=>{
    console.log("Listening on Port 3000");
})