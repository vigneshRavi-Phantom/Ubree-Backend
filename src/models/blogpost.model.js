"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPost = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class BlogPost extends sequelize_1.Model {
}
exports.BlogPost = BlogPost;
BlogPost.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    ServiceSubCategoryid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Title: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Metatitle: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Slug: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Summary: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Content: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    Published: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "BlogPost",
    sequelize: dbconfig_1.sequelize,
});
