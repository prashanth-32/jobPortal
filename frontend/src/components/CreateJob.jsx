import { useContext } from "react";
import { FaAnglesRight, FaAnglesDown } from "react-icons/fa6";
import { context } from "./contextProvider";
import axios from "axios";
import { useState } from "react";


const CreateJob = () => {
    const { show, setShow } = useContext(context);
    const [jobTitle,setJobTitle] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [Location,setLocation] = useState('');
    const [jobType,setJobType] = useState('');
    const [salaryMin,setsalaryMin] = useState(0);
    const [salaryMax,setsalaryMax] = useState(0);
    const [description,setDescription] = useState('');

    const handlePost = async () =>{
        try{
            const {data} = await axios.post('http://localhost:4000/createJob',{jobTitle,companyName,Location,jobType,salaryMin,salaryMax,description});
            console.log(data);
        }
        catch(err)
        {
            console.log(err);
        }
        finally{
            setShow((prev) => !prev);
        }
    }
    return (
        <div className='flex justify-center fixed top-10 bottom-10 w-[100%] '>
            <div className=' rounded-lg w-[50%] flex flex-col gap-2 p-5 border-1 border-white bg-white shadow-2xl'>
                <div className='flex justify-center'>
                    <p className='text-xl font-semibold'>Create job opening</p>
                </div>
                <div className='flex gap-2 mt-4'>
                    <div className='flex flex-col gap-2 w-[50%]'>
                        <p className='font-semibold'>Job Title</p>
                        <input type="text" name="" id="" placeholder='Enter job name' className='rounded-md border-gray-400 border-2 p-2' onChange={(e)=>setJobTitle(e.target.value)}/>
                    </div>
                    <div className='flex flex-col gap-2 w-[50%]'>
                        <p className='font-semibold'>Company Name</p>
                        <input type="text" name="" id="" placeholder='Amazon, Microsoft, Swiggy' className='rounded-md border-gray-400 border-2 p-2' onChange={(e)=>setCompanyName(e.target.value)}/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 w-[50%]'>
                        <p className='font-semibold'>Location</p>
                        <select className='text-gray-500 rounded-md border-gray-400 border-2 p-2' onChange={(e)=>setLocation(e.target.value)}>
                            <option value="" selected disabled>Enter preferred location</option>
                            <option value="Hyderabad" >Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-[50%]'>
                        <p>Job type</p>
                        <select className='text-gray-500 rounded-md border-2 border-gray-400 p-2' onChange={(e)=>setJobType(e.target.value)}>
                            <option value="Full-time">Full Time</option>
                            <option value="Part-time" >Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 w-[50%]'>
                        <p>Salary range</p>
                        <div className='flex gap-2'>
                            <input type="text" placeholder='↑↓ ₹0 LPA' className='rounded-md border-gray-400 border-2 p-2 w-[50%]' onChange={(e)=>setsalaryMin(e.target.value)}/>
                            <input type="text" placeholder='↑↓ ₹12 LPA' className='rounded-md border-gray-400 border-2 p-2 w-[50%]' onChange={(e)=>setsalaryMax(e.target.value)}/>
                        </div>
                    </div>
                    <div className='flex flex-col text-gray-500 gap-2 w-[50%]'>
                        <p className='text-black'>Application Deadline</p>
                        <input type="date" name="" id="" className='rounded-md border-gray-400 border-2 p-2' />
                    </div>
                </div>
                <div className='flex flex-col text-gray-500 gap-2'>
                    <p className='text-black'>Job Description</p>
                    <textarea name="" id="" placeholder='Please share a description to let the candidate know more about the job role' rows={6} className='w-[100%] rounded-md border-gray-400 border-2 p-2' onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className='flex gap-2 justify-between mt-10'>
                    <button className='flex gap-1 items-center text-black px-6 py-2 rounded-md border-2 border-black font-semibold' onClick={() => setShow((prev)=>!prev)}>
                        <p>Save Draft</p>
                        <FaAnglesDown size={10} />
                    </button>
                    <button className='flex gap-1 items-center text-white bg-[#00AAFF] px-6 py-2 rounded-md font-semibold'
                        onClick={() => handlePost()}>
                        <p>Publish</p>
                        <FaAnglesRight size={10} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateJob