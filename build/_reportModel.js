"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const ReportSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    status: { type: String, enum: types_1.ReportStatusArray, default: "PENDING" },
    target: { type: _mediaModel_1.MediaRelationSchema, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    subject: { type: String, enum: types_1.ReportSubjectArray, required: true },
    message: { type: String, required: true },
    author: { type: _mediaModel_1.MediaRelationSchema, required: true },
}, { timestamps: true, id: false });
exports.ReportModel = mongoose_1.models.Report || (0, mongoose_1.model)("Report", ReportSchema);
