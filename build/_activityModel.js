"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const withTargetSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    path: { type: String, enum: types_1.TargetPathArray, required: true },
}, { _id: false, toJSON: { virtuals: true } });
const ActivitySchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(8) },
    type: {
        type: String,
        enum: types_1.ActivityTypeArray,
        required: true,
    },
    action: {
        type: String,
        enum: types_1.ActivityActionArray,
        required: true,
    },
    author: { type: _mediaModel_1.withSchema, default: undefined },
    targets: { type: [withTargetSchema], required: true, default: undefined },
    params: { type: Object, default: undefined },
}, { timestamps: true, id: false });
exports.ActivityModel = mongoose_1.models.Activity || (0, mongoose_1.model)("Activity", ActivitySchema);
