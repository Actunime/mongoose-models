"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRelationSchema = exports.PersonSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
exports.PersonSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: { type: _mediaSchema_1.MediaNameSchema, required: true },
    birthDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    deathDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    description: { type: String, default: undefined },
    avatar: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    links: { type: [_mediaSchema_1.MediaLinkSchema], default: undefined },
    isGroupe: { type: Boolean, default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.PersonRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.PersonRoleArray, default: undefined },
}, { _id: false });
