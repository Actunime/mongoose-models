"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const _mediaSchema_1 = require("./_mediaSchema");
const ImageSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    label: { type: String, enum: types_1.ImageLabelArray, required: true },
    target: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
