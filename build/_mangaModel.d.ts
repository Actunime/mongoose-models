import { IManga } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withMangaSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id?: string | null | undefined;
    sourceLabel?: string | null | undefined;
    parentLabel?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id?: string | null | undefined;
    sourceLabel?: string | null | undefined;
    parentLabel?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id?: string | null | undefined;
    sourceLabel?: string | null | undefined;
    parentLabel?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MangaModel: Model<IManga, {}, {}, {}, import("mongoose").Document<unknown, {}, IManga> & IManga & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_mangaModel.d.ts.map