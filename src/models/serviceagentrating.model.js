"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAgentRating = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceAgentRating extends sequelize_1.Model {
}
exports.ServiceAgentRating = ServiceAgentRating;
ServiceAgentRating.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceAgentID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    drating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    dratingdate: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
    },
    Reviewcomments: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "ServiceAgentRating",
    sequelize: dbconfig_1.sequelize,
});
