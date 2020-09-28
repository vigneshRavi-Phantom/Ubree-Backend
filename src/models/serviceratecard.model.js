"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRateCard = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceRateCard extends sequelize_1.Model {
}
exports.ServiceRateCard = ServiceRateCard;
ServiceRateCard.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Cost: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    AdditionalTxt: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Duartion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
}, {
    tableName: "ServiceRateCard",
    sequelize: dbconfig_1.sequelize,
});
