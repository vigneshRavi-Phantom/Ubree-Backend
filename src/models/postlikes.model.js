"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLikes = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class PostLikes extends sequelize_1.Model {
}
exports.PostLikes = PostLikes;
PostLikes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    Postid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Counter: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "PostLikes",
    sequelize: dbconfig_1.sequelize,
});
