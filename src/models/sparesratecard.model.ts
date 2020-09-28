import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class SparesRateCard extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public SpareName!: string;
  public Cost!: number;
  public AdditionalTxt!: string;
}

SparesRateCard.init(
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
      SpareName: {
        type: DataTypes.STRING(500),
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
    },
    {
      tableName: "SparesRateCard",
      sequelize,
    }
  );