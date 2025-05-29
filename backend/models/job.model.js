import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    jobTitle: {
        type: String
    },
    companyName:{
        type:String
    },
    Location:{
        type:String
    },
    jobType:{
        type:String,
    },
    salaryMin:{
        type:Number,
    },
    salaryMax:{
        type:Number,
    },
    description:{
        type:String,
    }
},
    {
        timestamps: true
    });

const Post = mongoose.model('post', postSchema);

export default Post;