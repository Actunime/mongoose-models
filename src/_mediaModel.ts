import { IDate, IMediaDate, IMediaLink, IMediaTitle } from "@actunime/types";
import { Schema } from "mongoose";

export const MediaTitleSchema = new Schema<IMediaTitle>(
  {
    default: {
      type: String,
      required: true,
      // unique: true,
      index: "text",
      trim: true,
    },
    alias: { type: [String], trim: true, default: undefined },
  },
  { _id: false },
);


const DateSchema = new Schema<IDate>({
  year: {
    type: Number,
    required: false, // L'année est facultative
    min: 0 // Optionnel : éviter des valeurs négatives
  },
  month: {
    type: Number,
    required: false, // Le mois est facultatif
    min: 1,
    max: 12
  },
  day: {
    type: Number,
    required: false, // Le jour est facultatif
    min: 1,
    max: 31
  },
  hours: {
    type: Number,
    required: false, // Heure facultative
    min: 0,
    max: 23
  },
  minutes: {
    type: Number,
    required: false, // Minute facultative
    min: 0,
    max: 59
  },
  seconds: {
    type: Number,
    required: false, // Minute facultative
    min: 0,
    max: 59
  }
}, { _id: false });

export const MediaDateSchema = new Schema<IMediaDate>({
  start: { type: DateSchema, required: false },
  end: { type: DateSchema, required: false },
}, { _id: false });

export const MediaImageSchema = new Schema(
  {
    cover: { type: String },
    banner: { type: String },
  },
  { _id: false },
);

export const MediaLinkSchema = new Schema<IMediaLink>(
  {
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false },
);

export const withSchema = new Schema(
  {
    id: { type: String, required: true },
  },
  { _id: false, toJSON: { virtuals: true } },
);