
import { INTEGER, STRING } from "sequelize";
import { Model } from "sequelize/types";
import {sequelize} from '../dbconfig';
export class Role extends Model{
    public id!:number;
    public roleId!:string;
    public roleDescription!:string;
}
Role.init(
    {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
          },
          roleId:{
              type:STRING(24),
              allowNull:false
          },
          roleDescription:{
              type:STRING(100),
              allowNull:false
          },

    },
    {
    tableName:"Role",
    sequelize        
    }
)