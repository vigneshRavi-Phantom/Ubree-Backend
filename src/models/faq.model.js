"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQ = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class FAQ extends sequelize_1.Model {
}
exports.FAQ = FAQ;
FAQ.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Question: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    Answer: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
}, {
    tableName: "FAQ",
    sequelize: dbconfig_1.sequelize,
});
