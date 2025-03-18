"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModel = exports.withPersonSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const _imageModel_1 = require("./_imageModel");
const PersonSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    isGroupe: { type: Boolean, default: false },
    name: _mediaModel_1.MediaTitleSchema,
    birthDate: { type: _mediaModel_1.DateSchema, default: undefined },
    deathDate: { type: _mediaModel_1.DateSchema, default: undefined },
    description: String,
    avatar: { type: _imageModel_1.withImage, default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
// PersonSchema.virtual("name.full").get(function () {
//   return `${this.name.first} ${this.name.last || ""}`.trim();
// });
PersonSchema.virtual("avatar.data", {
    ref: "Image",
    localField: "avatar.id",
    foreignField: "id",
    justOne: true,
});
exports.withPersonSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    role: { type: String, enum: types_1.PersonRoleArray, default: undefined },
}, { _id: false, toJSON: { virtuals: true } });
exports.PersonModel = mongoose_1.models.Person || (0, mongoose_1.model)("Person", PersonSchema, "persons");
