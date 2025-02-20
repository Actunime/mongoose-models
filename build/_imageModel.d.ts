import { Model, Schema } from "mongoose";
import { IImage } from "@actunime/types";
export declare const withImage: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const ImageModel: Model<IImage, {}, {}, {}, import("mongoose").Document<unknown, {}, IImage> & IImage & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_imageModel.d.ts.map