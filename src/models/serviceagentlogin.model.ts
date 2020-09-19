import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceAgentLogin extends Model {
  public id!: number;
  public mobileNumber!: string;
  public otp!: number;
  public isActive!: boolean;
  public roleId!: number;
  public created!: string;
  public createdBy!: string;
  public modified!: string;
  public modifiedBy!: string;
  
}

ServiceAgentLogin.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    mobileNumber: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    otp: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
    },
    userType: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    isActive: {
      type: new DataTypes.INTEGER(),
      defaultValue: 0,
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
    tableName: "UserLogin",
    sequelize,
  }
);
