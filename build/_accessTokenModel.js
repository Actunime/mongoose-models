"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenModel = exports.withAccessTokenSchema = void 0;
const mongoose_1 = require("mongoose");
const AccessTokenSchema = new mongoose_1.Schema({
    token: { type: String, required: true, unique: true, index: "text" },
    refreshToken: { type: String, required: true, unique: true, index: "text" },
    clientId: { type: String, required: true, index: "text" },
    userId: { type: String, required: true, index: "text" },
    device: { type: String },
    lastActivity: { type: Date, default: Date.now, index: { expires: '3d' } },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true, id: false });
exports.withAccessTokenSchema = new mongoose_1.Schema({
    id: { type: String },
}, { _id: false, toJSON: { virtuals: true } });
exports.AccessTokenModel = mongoose_1.models.AccessToken || (0, mongoose_1.model)("AccessToken", AccessTokenSchema);
