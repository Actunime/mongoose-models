"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const PatchSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    type: { type: String, enum: types_1.PatchTypeArray, required: true },
    note: { type: String, default: undefined },
    moderatorNote: { type: String, default: undefined },
    status: { type: String, enum: types_1.PatchStatusArray, default: "PENDING" },
    target: { type: _mediaModel_1.withSchema, default: undefined },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    ref: { type: _mediaModel_1.withSchema, default: undefined },
    newValues: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    oldValues: { type: mongoose_1.Schema.Types.Mixed, default: undefined },
    author: { type: _mediaModel_1.withSchema },
    currentModerator: { type: _mediaModel_1.withSchema, default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
PatchSchema.virtual("target.data", {
    ref: (doc) => doc.targetPath,
    localField: "target.id",
    foreignField: "id",
    justOne: true,
});
PatchSchema.virtual("ref.data", {
    ref: "Patch",
    localField: "ref.id",
    foreignField: "id",
    justOne: true,
});
PatchSchema.virtual("author.data", {
    ref: "User",
    localField: "author.id",
    foreignField: "id",
    justOne: true,
});
PatchSchema.virtual("currentModerator.data", {
    ref: "User",
    localField: "author.id",
    foreignField: "id",
    justOne: true,
});
exports.PatchModel = mongoose_1.models.Patch || (0, mongoose_1.model)("Patch", PatchSchema);
