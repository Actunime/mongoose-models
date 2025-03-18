"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModel = exports.PersonRelationSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const PersonSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: { type: _mediaModel_1.MediaNameSchema, required: true },
    birthDate: { type: _mediaModel_1.DateSchema, default: undefined },
    deathDate: { type: _mediaModel_1.DateSchema, default: undefined },
    description: { type: String, default: undefined },
    avatar: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    isGroupe: { type: Boolean, default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.PersonRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.PersonRoleArray, default: undefined },
}, { _id: false });
exports.PersonModel = mongoose_1.models.Person || (0, mongoose_1.model)("Person", PersonSchema, "persons");
