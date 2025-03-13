"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const PatchSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    ref: { type: _mediaModel_1.withSchema, required: true },
    type: { type: String, enum: types_1.PatchTypeArray, required: true },
    status: { type: String, enum: types_1.PatchStatusArray, default: "PENDING" },
    target: { type: _mediaModel_1.withSchema, required: true, default: undefined },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    description: { type: String, default: undefined },
    reason: { type: String, default: undefined },
    original: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    changes: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    isChangesUpdated: { type: Boolean, default: false },
    author: { type: _mediaModel_1.withSchema, required: true },
    moderator: { type: _mediaModel_1.withSchema, default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
exports.PatchModel = mongoose_1.models.Patch || (0, mongoose_1.model)("Patch", PatchSchema);
