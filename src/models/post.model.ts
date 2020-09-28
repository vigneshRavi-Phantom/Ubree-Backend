import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class Post extends Model{
  public id!: number;
  public Blogid!: number;
  public Title!: string;
  public Content!: string;
  public Published!: number;
}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      Blogid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Title: {
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
      tableName: "Post",
      sequelize,
    }
  );