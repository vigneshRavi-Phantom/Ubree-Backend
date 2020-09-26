import { BOOLEAN, INTEGER, STRING } from "sequelize";
import { Model } from "sequelize/types";
import {sequelize} from '../dbconfig';
export class Menu extends Model{
public id!:number;
public menuName!:string;
public isParent!:boolean;
public parentId!:number;
public isActive!:number;
}

Menu.init({
id:{
    type:INTEGER.UNSIGNED,
    autoIncrement:true,
    primaryKey:true
},
menuName:{
    type:STRING(200),
    allowNull:false
},
isParent:{
    type:BOOLEAN,
    defaultValue:0
},
isActive:{
    type:BOOLEAN,
    defaultValue:0
}
},
{
    tableName:"Menu",
    sequelize
}

)

