"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const sequelize_1 = require("sequelize");
const types_1 = require("sequelize/types");
const dbconfig_1 = require("../dbconfig");
class Menu extends types_1.Model {
}
exports.Menu = Menu;
Menu.init({
    id: {
        type: sequelize_1.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    menuName: {
        type: sequelize_1.STRING(200),
        allowNull: false
    },
    isParent: {
        type: sequelize_1.BOOLEAN,
        defaultValue: 0
    },
    isActive: {
        type: sequelize_1.BOOLEAN,
        defaultValue: 0
    }
}, {
    tableName: "Menu",
    sequelize: dbconfig_1.sequelize
});
