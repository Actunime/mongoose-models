"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const _personModel_1 = require("./_personModel");
const TrackSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    type: { type: String, enum: types_1.TrackTypeArray, required: true },
    name: { type: _mediaModel_1.MediaNameSchema, required: true },
    releaseDate: { type: _mediaModel_1.DateSchema, default: undefined },
    description: { type: String, default: undefined },
    cover: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    artists: { type: [_personModel_1.PersonRelationSchema], default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.TrackModel = mongoose_1.models.Track || (0, mongoose_1.model)("Track", TrackSchema);
