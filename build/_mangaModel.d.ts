import { Model, Schema } from "mongoose";
export declare const withMangaSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id?: string | null | undefined;
    sourceLabel?: any;
    parentLabel?: any;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id?: string | null | undefined;
    sourceLabel?: any;
    parentLabel?: any;
}>> & import("mongoose").FlatRecord<{
    id?: string | null | undefined;
    sourceLabel?: any;
    parentLabel?: any;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MangaModel: Model<IManga, {}, {}, {}, any, any>;
//# sourceMappingURL=_mangaModel.d.ts.map