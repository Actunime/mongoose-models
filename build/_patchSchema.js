"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
exports.PatchSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    ref: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    type: { type: String, enum: types_1.PatchTypeArray, required: true },
    status: { type: String, enum: types_1.PatchStatusArray, default: 'PENDING' },
    target: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    description: { type: String, default: undefined },
    reason: { type: String, default: undefined },
    original: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    changes: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    isChangesUpdated: { type: Boolean, default: undefined },
    author: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    moderator: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
}, { timestamps: true, id: false });
