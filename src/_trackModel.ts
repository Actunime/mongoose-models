import { ITrack, TrackTypeArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { DateSchema, MediaLinkSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaModel";
import { PersonRelationSchema } from "./_personModel";

const TrackSchema = new Schema<ITrack>(
  {
    id: { type: String, unique: true, default: () => genPublicID(5) },
    type: { type: String, enum: TrackTypeArray, required: true },
    name: { type: MediaNameSchema, required: true },
    releaseDate: { type: DateSchema, default: undefined },
    description: { type: String, default: undefined },
    cover: { type: MediaRelationSchema, default: undefined },
    artists: { type: [PersonRelationSchema], default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false },
);

export const TrackModel = (models.Track as Model<ITrack>) || model("Track", TrackSchema);
