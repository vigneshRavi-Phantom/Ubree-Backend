"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const types_1 = require("sequelize/types");
const dbconfig_1 = require("../dbconfig");
class Role extends types_1.Model {
}
exports.Role = Role;
Role.init({
    id: {
        type: sequelize_1.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    roleId: {
        type: sequelize_1.STRING(24),
        allowNull: false
    },
    roleDescription: {
        type: sequelize_1.STRING(100),
        allowNull: false
    },
}, {
    tableName: "Role",
    sequelize: dbconfig_1.sequelize
});
