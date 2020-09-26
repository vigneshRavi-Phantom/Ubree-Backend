import { INTEGER, STRING } from "sequelize";
import { Model } from "sequelize/types";
import {sequelize} from '../dbconfig';
export class RoleMenuMapping extends Model{
    public id!:number;
    public roleId!:number;
    public menuId!:number;
    public permission!:string;
    public isActive!:number;
}

RoleMenuMapping.init({
id:{
    type:INTEGER.UNSIGNED,
    primaryKey:true,
    autoIncrement:true
},
roleId:{
    type:INTEGER.UNSIGNED,
    allowNull:false
},
menuId:{
    type:INTEGER.UNSIGNED,
    allowNull:false
},
permission:{
    type:STRING(100),
    allowNull:false
},
isActive:{
    type:INTEGER.UNSIGNED,
    allowNull:false
}
},
{
    tableName:"RoleMenuMapping",
    sequelize
}

)