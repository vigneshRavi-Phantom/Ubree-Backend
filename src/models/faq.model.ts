import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class FAQ extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public Question!: string;
  public Answer!: string;
}

FAQ.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      ServiceSubCategoryid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Question: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      Answer: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      tableName: "FAQ",
      sequelize,
    }
  );