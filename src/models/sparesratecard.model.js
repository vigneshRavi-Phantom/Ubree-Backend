"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparesRateCard = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class SparesRateCard extends sequelize_1.Model {
}
exports.SparesRateCard = SparesRateCard;
SparesRateCard.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    SpareName: {
        type: sequelize_1.DataTypes.STRING(500),
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
}, {
    tableName: "SparesRateCard",
    sequelize: dbconfig_1.sequelize,
});
