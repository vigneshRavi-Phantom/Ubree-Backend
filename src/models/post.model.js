"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    Blogid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Title: {
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
    tableName: "Post",
    sequelize: dbconfig_1.sequelize,
});
