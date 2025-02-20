import { Model, Schema } from "mongoose";
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
export declare const ImageModel: Model<IImage, {}, {}, {}, any, any>;
//# sourceMappingURL=_imageModel.d.ts.map