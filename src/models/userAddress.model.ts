import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { INTEGER } from "sequelize";
import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class UserAddress extends Model{
    public id!:number;
    public tagName!:string;
    public userId!:number;
    public address!:string;
    public street!:string;
    public city!:string;
    public state!:string;
    public zipCode!:string;
    public landMark!:string;
}

UserAddress.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    tagName:{
        type: STRING,
        allowNull:false
    },
    userId:{
        type:INTEGER.UNSIGNED,
        allowNull:false
    } ,
    address:{
        type:STRING(500),
        allowNull:false
    },
    street:{
        type:STRING(500),
        allowNull:false
    },
    city:{
        type:STRING(500),
        allowNull:false
    },
    state:{
        type:STRING(50),
        allowNull:false
    },
    zipCode:{
        type:STRING(6),
        allowNull:false
    },
    landMark:{
        type:STRING(500),
        allowNull:false
    },

},{
    tableName:"UserAddress",
    sequelize
})