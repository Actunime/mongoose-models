"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModel = exports.withCharacterSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _personModel_1 = require("./_personModel");
const _imageModel_1 = require("./_imageModel");
const CharacterSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    name: {
        default: { type: String, required: true },
        alias: { type: [String], trim: true, default: undefined }
    },
    age: Number,
    birthDate: Date,
    gender: {
        type: String,
        enum: types_1.CharacterGenderArray,
        required: true,
    },
    species: {
        type: String,
        enum: types_1.CharacterSpeciesArray,
        required: true,
    },
    description: String,
    avatar: { type: _imageModel_1.withImage, default: undefined },
    actors: { type: [_personModel_1.withPersonSchema], default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
// CharacterSchema.virtual('name.full').get(function () {
//   return `${this.name.default}`.trim();
// });
exports.withCharacterSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.CharacterRoleArray },
}, { _id: false, toJSON: { virtuals: true } });
CharacterSchema.virtual("actors.data", {
    ref: "Person",
    localField: "actors.id",
    foreignField: "id",
    justOne: true,
});
CharacterSchema.virtual("avatar.data", {
    ref: "Image",
    localField: "avatar.id",
    foreignField: "id",
    justOne: true,
});
exports.CharacterModel = mongoose_1.models.Character ||
    (0, mongoose_1.model)("Character", CharacterSchema);
