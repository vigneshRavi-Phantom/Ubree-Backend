import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class BlogPost extends Model{
  public id!: number;
  public ServiceSubCategoryid!: number;
  public Title!: string;
  public Metatitle!: string;
  public Slug!: string;
  public Summary!: string;
  public Content!: string;
  public Published!: number;
}

BlogPost.init(
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
      Title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Metatitle: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Slug: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Summary: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Published: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "BlogPost",
      sequelize,
    }
  );