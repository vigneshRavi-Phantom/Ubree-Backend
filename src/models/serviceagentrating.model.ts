import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceAgentRating extends Model {
    public id!: number;
    public ServiceAgentID!: number;
    public ServiceSubCategoryid!: number;
    public drating!: number;
    public dratingdate!: string;
    public Reviewcomments!: string;
    public UserId!: number;
}

ServiceAgentRating.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        ServiceAgentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ServiceSubCategoryid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        drating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dratingdate: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        Reviewcomments: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "ServiceAgentRating",
        sequelize,
    }
);