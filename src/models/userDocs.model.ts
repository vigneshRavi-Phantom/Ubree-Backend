import { fstat } from "fs";
import { UUID } from "sequelize";
import { UUIDV1 } from "sequelize";
import { INTEGER, STRING } from "sequelize";
import { Model } from "sequelize/types";
import {sequelize} from '../dbconfig';
export class Docs extends Model{
    public id!:number;
    public uId!:string;
    public sourceType!:string;
    public docName!:string;
    public docType!:string;
    public docFilePath!:string;
    public docFileName!:string;
}

Docs.init({
    id: {
        type: INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      uuId:{
          type:UUID,
          defaultValue:UUIDV1,
          allowNull:false
      },
    //   (Service_Agency, Service_Agent, Application_user)
    sourceType:{
        type:STRING(40),
        allowNull:false
    },
    docName:{
        type:STRING(300),
        allowNull:false
    },
    // Aadhar, Lisence
    docType:{
        type:STRING(50),
        allowNull:false
    },
    docFilePath:{
        type:STRING(200),
        allowNull:false
    },
    docFileName:{
        type:STRING(400),
        allowNull:false
    }
    

},
{
    tableName:"TableDocs",
    sequelize
}
)