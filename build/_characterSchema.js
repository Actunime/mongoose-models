"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterRelationSchema = exports.CharacterSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _personSchema_1 = require("./_personSchema");
const _mediaSchema_1 = require("./_mediaSchema");
<<<<<<< HEAD
exports.CharacterSchema = new mongoose_1.Schema({
=======
const CharacterSchema = new mongoose_1.Schema({
>>>>>>> fd9c344d5366b07c982f61300a2170f5f70644aa
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: _mediaSchema_1.MediaNameSchema,
    age: { type: Number, default: undefined },
    birthDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    gender: { type: String, enum: types_1.CharacterGenderArray, default: undefined },
    species: { type: String, enum: types_1.CharacterSpeciesArray, default: undefined, },
    description: { type: String, default: undefined },
    avatar: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    actors: { type: [_personSchema_1.PersonRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.CharacterRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.CharacterRoleArray, default: undefined },
}, { _id: false });
