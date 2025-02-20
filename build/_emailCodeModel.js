"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCodeModel = exports.withEmailCodeSchema = void 0;
const mongoose_1 = require("mongoose");
const EmailCodeSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true, index: "text" },
    email: { type: String, required: true, index: "text" },
    accountId: { type: String, required: true, index: "text" },
    device: { type: String },
    createdAt: { type: Date, default: Date.now, index: { expires: '1h' } },
}, { timestamps: true, id: false });
exports.withEmailCodeSchema = new mongoose_1.Schema({
    id: { type: String },
}, { _id: false, toJSON: { virtuals: true } });
exports.EmailCodeModel = mongoose_1.models.EmailCode ||
    (0, mongoose_1.model)("EmailCode", EmailCodeSchema);
