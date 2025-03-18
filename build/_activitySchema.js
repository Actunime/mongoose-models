"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const ActivityTargetSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    path: { type: String, enum: types_1.TargetPathArray, required: true },
}, { _id: false });
const ActivitySchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    type: { type: String, enum: types_1.ActivityTypeArray, required: true },
    action: { type: String, enum: types_1.ActivityActionArray, required: true },
    targets: { type: [ActivityTargetSchema], required: true, default: undefined },
    author: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    params: { type: Object, default: undefined },
}, { timestamps: true, id: false });
