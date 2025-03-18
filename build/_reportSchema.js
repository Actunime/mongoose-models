"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const ReportSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    status: { type: String, enum: types_1.ReportStatusArray, default: "PENDING" },
    target: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    subject: { type: String, enum: types_1.ReportSubjectArray, required: true },
    message: { type: String, required: true },
    author: { type: _mediaSchema_1.MediaRelationSchema, required: true },
}, { timestamps: true, id: false });
