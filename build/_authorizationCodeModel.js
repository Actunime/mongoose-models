"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationCodeModel = exports.withAuthorizationCodeSchema = void 0;
const mongoose_1 = require("mongoose");
const AuthorizationCodeSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true, index: "text" },
    clientId: { type: String, required: true, index: "text" },
    userId: { type: String, required: true, index: "text" },
    device: { type: String },
    createdAt: { type: Date, default: Date.now, index: { expires: '1m' } },
}, { timestamps: true, id: false });
exports.withAuthorizationCodeSchema = new mongoose_1.Schema({
    id: { type: String },
}, { _id: false, toJSON: { virtuals: true } });
exports.AuthorizationCodeModel = mongoose_1.models.AuthorizationCode ||
    (0, mongoose_1.model)("AuthorizationCode", AuthorizationCodeSchema);
