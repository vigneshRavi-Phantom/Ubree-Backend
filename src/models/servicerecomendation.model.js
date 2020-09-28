"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecomendation = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceRecomendation extends sequelize_1.Model {
}
exports.ServiceRecomendation = ServiceRecomendation;
ServiceRecomendation.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Description: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "ServiceRecomendation",
    sequelize: dbconfig_1.sequelize,
});
