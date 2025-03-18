import { IManga } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const MangaRelationSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const MangaModel: Model<IManga, {}, {}, {}, import("mongoose").Document<unknown, {}, IManga> & import("@actunime/types/_mangaType").IMangaRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_mangaModel.d.ts.map