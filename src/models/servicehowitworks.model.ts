import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceHowitWorks extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public Description!: string;
  public Order!: number;
}

ServiceHowitWorks.init(
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
      Description: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "ServiceHowitWorks",
      sequelize,
    }
  );