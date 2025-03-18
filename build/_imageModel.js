"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const _mediaModel_1 = require("./_mediaModel");
const ImageSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    label: { type: String, enum: types_1.ImageLabelArray, required: true },
    target: { type: _mediaModel_1.MediaRelationSchema, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.ImageModel = mongoose_1.models.Image || (0, mongoose_1.model)("Image", ImageSchema);
