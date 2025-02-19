"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = exports.withImage = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
exports.withImage = new mongoose_1.Schema({
    id: { type: String, required: true },
}, { _id: false, toJSON: { virtuals: true } });
const ImageSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    label: { type: String, enum: types_1.ImageLabelArray },
    target: { type: exports.withImage, required: true },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
ImageSchema.virtual("location").get(function () {
    return `/img/${this.targetPath?.toLocaleLowerCase() + "s"}/${this.id}.webp`;
});
const rootURL = `http${process.env.NODE_ENV === "production" ? "s" : ""}://${process.env.IMAGE_HOST}${process.env.NODE_ENV === "production" ? "" : `:${process.env.IMAGE_PORT}`}`;
ImageSchema.virtual("url").get(function () {
    return `${rootURL}/${this.targetPath?.toLocaleLowerCase() + "s"}/${this.id}.webp`;
});
exports.ImageModel = mongoose_1.models.Image || (0, mongoose_1.model)("Image", ImageSchema);
