import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceMemPlan extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public PlanDuration!: string;
  public Fequency!: string;
  public Cost!: number;
}

ServiceMemPlan.init(
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
      PlanDuration: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Fequency: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "ServiceMemPlan",
      sequelize,
    }
  );