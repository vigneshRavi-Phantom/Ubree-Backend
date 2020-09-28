"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const sequelize_3 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class UserAddress extends sequelize_3.Model {
}
exports.UserAddress = UserAddress;
UserAddress.init({
    id: {
        type: sequelize_3.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    tagName: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    userId: {
        type: sequelize_2.INTEGER.UNSIGNED,
        allowNull: false
    },
    address: {
        type: sequelize_1.STRING(500),
        allowNull: false
    },
    street: {
        type: sequelize_1.STRING(500),
        allowNull: false
    },
    city: {
        type: sequelize_1.STRING(500),
        allowNull: false
    },
    state: {
        type: sequelize_1.STRING(50),
        allowNull: false
    },
    zipCode: {
        type: sequelize_1.STRING(6),
        allowNull: false
    },
    landMark: {
        type: sequelize_1.STRING(500),
        allowNull: false
    },
}, {
    tableName: "UserAddress",
    sequelize: dbconfig_1.sequelize
});
