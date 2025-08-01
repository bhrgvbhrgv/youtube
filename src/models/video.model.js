import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, //cloudinary video url
        required: true,
        enum: ["movie", "series", "short"]
    },
    thumbnail: {
        type: String, //cloudinary image url
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number, // in seconds 
        required: true,
    },
    views:{
        type: Number,
        default: 0, 
    },
    isPublished: {
        type: Boolean,
        default: true, 
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

videoSchema.plugin(mongooseAggregatePaginate);



export const Video = mongoose.model("Video",videoSchema);