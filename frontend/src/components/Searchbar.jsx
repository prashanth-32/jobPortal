import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiUserVoice } from "react-icons/bi";
import { useContext } from 'react';
import { context } from './contextProvider';


const Searchbar = () => {

    const {text,setText,loc,setLoc,type,setType} = useContext(context);
    return (
        <div className='flex mt-10 justify-around'>
            <div className="flex gap-3 items-center">
                <CiSearch size={25} />
                <input type="text" name="" id="" placeholder='Search By Job Title, Role' className="outline-none px-2" onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="flex gap-3 items-center">
                <div className="w-[1.5px] bg-gray-300 h-full" />
                <CiLocationOn size={25} />
                <select className="text-gray-500 w-full px-2 outline-none" onChange={(e)=>setLoc(e.target.value)}>
                    <option value="" selected disabled>Preferred Location</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </div>
            <div className="flex gap-3 items-center text-gray-500">
                <div className="w-[1.5px] bg-gray-300 h-full" />
                <BiUserVoice size={35} />
                <select className="text-gray-500 w-full px-2 outline-none" onChange={(e)=>setType(e.target.value)}>
                    <option value="" selected disabled>Job type</option>
                    <option value="Internship">Intership</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                </select>
            </div>
            <div className="flex gap-4">
                <div className="w-[1.5px] bg-gray-300" />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <p>Salary per month</p>
                        <p>₹50k - ₹80k</p>
                    </div>
                    <input type="range" name="" id="" className="accent-black cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Searchbar