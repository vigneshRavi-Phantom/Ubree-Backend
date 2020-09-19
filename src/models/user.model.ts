import { DataTypes, Model } from "sequelize";
import {sequelize} from '../dbconfig';
export class User extends Model {
    public id!: number; 
    public name!: string;
    public preferredName!: string | null;
 
}
User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      preferredName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      tableName: "users",
      sequelize, 
    }
  );

