"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackModel = exports.withTrackSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const _personModel_1 = require("./_personModel");
const _imageModel_1 = require("./_imageModel");
const TrackSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    type: {
        type: String,
        enum: types_1.TrackTypeArray,
        required: true,
    },
    name: {
        default: { type: String, required: true },
        alias: {
            type: [{ content: { type: String } }],
            default: undefined
        },
    },
    pubDate: { type: Date, default: undefined },
    cover: { type: _imageModel_1.withImage, default: undefined },
    artists: { type: [_personModel_1.withPersonSchema], default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
}, { timestamps: true, id: false });
TrackSchema.virtual("artists.data", {
    ref: "Person",
    localField: "artists.id",
    foreignField: "id",
    justOne: true,
});
TrackSchema.virtual("cover.data", {
    ref: "Image",
    localField: "cover.id",
    foreignField: "id",
    justOne: true,
});
exports.withTrackSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
}, { _id: false, toJSON: { virtuals: true } });
exports.TrackModel = mongoose_1.models.Track || (0, mongoose_1.model)("Track", TrackSchema);
