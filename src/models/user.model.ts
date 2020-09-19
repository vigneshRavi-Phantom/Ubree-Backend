import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class User extends Model{
    public id!: number;
    public userID !: string;
    public mobileNumber !:string;
    public email !: string;
    public isActive!: boolean;
    public created!:string;
    public createdBy!: string;
    public modified!:string;
    public modifiedBy!:string
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true
        },
        userID:{
            type: new DataTypes.STRING,
            allowNull:false,
        },
        mobileNumber:{
            type: new DataTypes.STRING(10),
            allowNull:false,
        },
        email:{
            type: new DataTypes.STRING,
            allowNull: true
        },
        isActive: {
            type: new DataTypes.INTEGER(),
            defaultValue: 0,
          },
          created: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
          },
          createdBy: {
            type: DataTypes.STRING(100),
            allowNull: true,
          },
          modified: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
          },
          modifiedBy: {
            type: DataTypes.STRING(100),
            allowNull: true,
          },
    },
    {
        tableName: "ServiceUserLogin",
        sequelize,
      }
)