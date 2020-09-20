import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class appConfig extends Model{
    public id!: number;
    public sid!: number;
    public sName!:string;
    public sValue!:string;
    public sDescription!:string;
    public isActive!: number;
    public created!: string;
    public createdBy!: string;
    public modified!: string;
    public modifiedBy!:string;
}

appConfig.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false
        },
        sid:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        sName:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        sValue:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        sDescription:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        isActive: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
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
        tableName:"appConfig",
        sequelize
    }
)
