import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Post from "./models/job.model.js"
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin:'https://jobportal-28dd.onrender.com',
    credentials:true
}))

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
    connectDB();
})

app.get('/',(req,res) =>{
    res.send("Running");
});


app.post('/createJob',async (req,res) => {
    try{
        const {jobTitle,companyName,Location,jobType,salaryMin,salaryMax,description} = req.body;
        console.log(jobTitle);
        const post = await Post.create({jobTitle,companyName,Location,jobType,salaryMin,salaryMax,description});
        console.log(post);
        res.status(200).json({message:'success!'});
    }
    catch(err)
    {
        res.status(400).json({message:err});
    }
})

app.get('/posts',async (req,res) =>{
    try{
        const data = await Post.find({});
        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(400).json({message:err});
    }
})

//exp onsite 