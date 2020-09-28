"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMenuMapping = void 0;
const sequelize_1 = require("sequelize");
const types_1 = require("sequelize/types");
const dbconfig_1 = require("../dbconfig");
class RoleMenuMapping extends types_1.Model {
}
exports.RoleMenuMapping = RoleMenuMapping;
RoleMenuMapping.init({
    id: {
        type: sequelize_1.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    roleId: {
        type: sequelize_1.INTEGER.UNSIGNED,
        allowNull: false
    },
    menuId: {
        type: sequelize_1.INTEGER.UNSIGNED,
        allowNull: false
    },
    permission: {
        type: sequelize_1.STRING(100),
        allowNull: false
    },
    isActive: {
        type: sequelize_1.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: "RoleMenuMapping",
    sequelize: dbconfig_1.sequelize
});
