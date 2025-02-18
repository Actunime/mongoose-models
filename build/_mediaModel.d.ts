import { IMediaDate, IMediaLink, IMediaTitle } from "@actunime/types";
import { Schema } from "mongoose";
export declare const MediaTitleSchema: Schema<IMediaTitle, import("mongoose").Model<IMediaTitle, any, any, any, import("mongoose").Document<unknown, any, IMediaTitle> & IMediaTitle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IMediaTitle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IMediaTitle>> & import("mongoose").FlatRecord<IMediaTitle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MediaDateSchema: Schema<IMediaDate, import("mongoose").Model<IMediaDate, any, any, any, import("mongoose").Document<unknown, any, IMediaDate> & IMediaDate & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IMediaDate, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IMediaDate>> & import("mongoose").FlatRecord<IMediaDate> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MediaImageSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    cover?: string | null | undefined;
    banner?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    cover?: string | null | undefined;
    banner?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    cover?: string | null | undefined;
    banner?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MediaLinkSchema: Schema<IMediaLink, import("mongoose").Model<IMediaLink, any, any, any, import("mongoose").Document<unknown, any, IMediaLink> & IMediaLink & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IMediaLink, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IMediaLink>> & import("mongoose").FlatRecord<IMediaLink> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const withSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
}>> & import("mongoose").FlatRecord<{
    id: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=_mediaModel.d.ts.map