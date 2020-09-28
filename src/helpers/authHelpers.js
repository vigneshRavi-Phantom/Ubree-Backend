"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.createToken = (phoneNumber, userType) => {
    const tokenDict = {
        phoneNumber: phoneNumber,
        userType: userType
    };
    const token = jsonwebtoken_1.default.sign(tokenDict, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
    return token;
};
