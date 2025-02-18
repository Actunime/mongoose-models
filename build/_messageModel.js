"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const _mediaModel_1 = require("./_mediaModel");
const MessageSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    author: { type: _mediaModel_1.withSchema, required: true },
    content: { type: String, required: true, trim: true },
    changes: { type: [{ content: String, at: Date }], default: [] },
    replyTo: { type: _mediaModel_1.withSchema },
    target: { type: _mediaModel_1.withSchema, default: undefined },
    targetPath: { type: String, enum: types_1.TargetPathArray, required: true },
    deleted: { type: Boolean, default: false },
    deletedBy: { type: _mediaModel_1.withSchema, default: undefined },
    deletedAt: { type: Date, default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
MessageSchema.virtual("target.data", {
    ref: (doc) => doc.targetPath,
    localField: "target.id",
    foreignField: "id",
    justOne: true,
});
MessageSchema.virtual("replys", {
    ref: "Message",
    localField: "replyTo.id",
    foreignField: "id",
    justOne: true,
});
exports.MessageModel = (0, mongoose_1.model)("Message", MessageSchema);
