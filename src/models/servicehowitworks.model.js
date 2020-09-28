"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHowitWorks = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceHowitWorks extends sequelize_1.Model {
}
exports.ServiceHowitWorks = ServiceHowitWorks;
ServiceHowitWorks.init({
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
    tableName: "ServiceHowitWorks",
    sequelize: dbconfig_1.sequelize,
});
