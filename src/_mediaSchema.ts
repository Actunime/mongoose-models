import { IDate, IMediaDate, IMediaLink, IMediaRelation, IMediaTitle } from "@actunime/types";
import { Schema } from "mongoose";

export const MediaTitleSchema = new Schema<IMediaTitle>(
  {
    default: { type: String, index: "text", trim: true, required: true },
    alias: { type: [String], default: undefined },
  },
  { _id: false },
);

export const MediaNameSchema = MediaTitleSchema;

export const DateSchema = new Schema<IDate>({
  year: {
    type: Number,
    min: 0, // Optionnel : éviter des valeurs négatives,
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

export const MediaDateSchema = new Schema<IMediaDate>({
  start: { type: DateSchema, required: false },
  end: { type: DateSchema, required: false },
}, { _id: false });

export const MediaLinkSchema = new Schema<IMediaLink>(
  {
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false },
);

export const MediaRelationSchema = new Schema<IMediaRelation>(
  {
    id: { type: String, required: true },
  },
  { _id: false },
);