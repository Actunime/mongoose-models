"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModel = exports.CharacterRelationSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _personModel_1 = require("./_personModel");
const _mediaModel_1 = require("./_mediaModel");
const CharacterSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: _mediaModel_1.MediaNameSchema,
    age: { type: Number, default: undefined },
    birthDate: { type: _mediaModel_1.DateSchema, default: undefined },
    gender: { type: String, enum: types_1.CharacterGenderArray, default: undefined },
    species: { type: String, enum: types_1.CharacterSpeciesArray, default: undefined, },
    description: { type: String, default: undefined },
    avatar: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    actors: { type: [_personModel_1.PersonRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.CharacterRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.CharacterRoleArray, default: undefined },
}, { _id: false });
exports.CharacterModel = mongoose_1.models.Character || (0, mongoose_1.model)("Character", CharacterSchema);
