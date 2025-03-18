"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const _personSchema_1 = require("./_personSchema");
exports.TrackSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    type: { type: String, enum: types_1.TrackTypeArray, required: true },
    name: { type: _mediaSchema_1.MediaNameSchema, required: true },
    releaseDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    description: { type: String, default: undefined },
    cover: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    artists: { type: [_personSchema_1.PersonRelationSchema], default: undefined },
    links: { type: [_mediaSchema_1.MediaLinkSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
