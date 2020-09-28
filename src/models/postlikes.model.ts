import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class PostLikes extends Model{
  public id!: number;
  public Postid!: number;
  public Counter!: number;
}

PostLikes.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      Postid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Counter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "PostLikes",
      sequelize,
    }
  );