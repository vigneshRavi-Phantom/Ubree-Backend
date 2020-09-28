import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceRateCard extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public Cost!: number;
  public AdditionalTxt!: string;
  public Duartion!: string;
}

ServiceRateCard.init(
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
      Cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AdditionalTxt: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Duartion: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      tableName: "ServiceRateCard",
      sequelize,
    }
  );