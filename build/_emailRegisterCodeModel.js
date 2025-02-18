"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRegisterCodeModel = exports.withEmailRegisterCodeSchema = void 0;
const mongoose_1 = require("mongoose");
const EmailRegisterCodeSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true, index: "text" },
    email: { type: String, required: true, index: "text" },
    data: { type: mongoose_1.Schema.Types.Mixed, required: true },
    device: { type: String },
    createdAt: { type: Date, default: Date.now, index: { expires: '1h' } },
}, { timestamps: true, id: false });
exports.withEmailRegisterCodeSchema = new mongoose_1.Schema({
    id: { type: String },
}, { _id: false, toJSON: { virtuals: true } });
exports.EmailRegisterCodeModel = mongoose_1.models.EmailRegisterCode ||
    (0, mongoose_1.model)("EmailRegisterCode", EmailRegisterCodeSchema);
