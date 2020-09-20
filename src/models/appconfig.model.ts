import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class appConfig extends Model{
    public id!: number;
    public categoryId!: number;
    public Name!:string;
    public Value!:string;
    public Description!:string;
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
        categoryId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        Name:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        Value:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        Description:{
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
