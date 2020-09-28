"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docs = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const sequelize_3 = require("sequelize");
const types_1 = require("sequelize/types");
const dbconfig_1 = require("../dbconfig");
class Docs extends types_1.Model {
}
exports.Docs = Docs;
Docs.init({
    id: {
        type: sequelize_3.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    uuId: {
        type: sequelize_1.UUID,
        defaultValue: sequelize_2.UUIDV1,
        allowNull: false
    },
    //   (Service_Agency, Service_Agent, Application_user)
    sourceType: {
        type: sequelize_3.STRING(40),
        allowNull: false
    },
    docName: {
        type: sequelize_3.STRING(300),
        allowNull: false
    },
    // Aadhar, Lisence
    docType: {
        type: sequelize_3.STRING(50),
        allowNull: false
    },
    docFilePath: {
        type: sequelize_3.STRING(200),
        allowNull: false
    },
    docFileName: {
        type: sequelize_3.STRING(400),
        allowNull: false
    }
}, {
    tableName: "TableDocs",
    sequelize: dbconfig_1.sequelize
});
