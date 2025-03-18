import { ITrack, TrackTypeArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { DateSchema, MediaDateSchema, MediaLinkSchema } from "./_mediaModel";
import { withPersonSchema } from "./_personModel";
import { withImage } from "./_imageModel";

const TrackSchema = new Schema<ITrack>(
  {
    id: { type: String, default: () => genPublicID(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    type: {
      type: String,
      enum: TrackTypeArray,
      required: true,
    },
    name: DateSchema,
    releaseDate: { type: MediaDateSchema, default: undefined },
    cover: { type: withImage, default: undefined },
    artists: { type: [withPersonSchema], default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
  },
  { timestamps: true, id: false },
);

TrackSchema.virtual("artists.data", {
  ref: "Person",
  localField: "artists.id",
  foreignField: "id",
  justOne: true,
});

TrackSchema.virtual("cover.data", {
  ref: "Image",
  localField: "cover.id",
  foreignField: "id",
  justOne: true,
});

export const withTrackSchema = new Schema(
  {
    id: { type: String, required: true },
  },
  { _id: false, toJSON: { virtuals: true } },
);

export const TrackModel =
  (models.Track as Model<ITrack>) || model("Track", TrackSchema);
