"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMemPlan = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceMemPlan extends sequelize_1.Model {
}
exports.ServiceMemPlan = ServiceMemPlan;
ServiceMemPlan.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    PlanDuration: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Fequency: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Cost: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "ServiceMemPlan",
    sequelize: dbconfig_1.sequelize,
});
