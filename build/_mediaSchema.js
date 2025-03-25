import { Schema } from "mongoose";
export const MediaTitleSchema = new Schema({
    default: { type: String, index: "text", trim: true, required: true },
    alias: { type: [String], default: undefined },
}, { _id: false });
export const MediaNameSchema = MediaTitleSchema;
export const DateSchema = new Schema({
    year: {
        type: Number,
        min: 0,
        default: undefined
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        default: undefined
    },
    day: {
        type: Number,
        min: 1,
        max: 31,
        default: undefined
    },
    hours: {
        type: Number,
        min: 0,
        max: 23,
        default: undefined
    },
    minutes: {
        type: Number,
        min: 0,
        max: 59,
        default: undefined
    },
    seconds: {
        type: Number,
        min: 0,
        max: 59,
        default: undefined
    }
}, { _id: false });
export const MediaDateSchema = new Schema({
    start: { type: DateSchema, required: false },
    end: { type: DateSchema, required: false },
}, { _id: false });
export const MediaLinkSchema = new Schema({
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
}, { _id: false });
export const MediaRelationSchema = new Schema({
    id: { type: String, required: true },
}, { _id: false });
