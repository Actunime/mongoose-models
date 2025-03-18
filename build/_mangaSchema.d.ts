import { IManga } from "@actunime/types";
import { Schema } from "mongoose";
export declare const MangaRelationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    id: string;
    label?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
    label?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id: string;
    label?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MangaSchema: Schema<IManga, import("mongoose").Model<IManga, any, any, any, import("mongoose").Document<unknown, any, IManga> & import("@actunime/types/_mangaType").IMangaRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IManga, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IManga>> & import("mongoose").FlatRecord<IManga> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
