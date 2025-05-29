import mongoose from "mongoose"

const connectDB = async () =>{
    const URI = process.env.URI
    try{
        const conn = await mongoose.connect(URI);
        console.log('Connected to database successfully!');
    }
    catch(err)
    {
        console.error("Error while connecting database , ",err);
    }
};

export default connectDB;