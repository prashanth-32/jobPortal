import amazon from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";
import tcs from "../assets/tata.png";
import swiggy from "../assets/swiggy.png";
import tesla from "../assets/tesla.png";
import { BiUserPlus } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import googleLogo from '../assets/google.png';

const logos = {
  amazon: amazon,
  google: googleLogo,
  microsoft:microsoftLogo,
  tcs:tcs,
  swiggy:swiggy,
  tesla:tesla
};


const Jobcard = ({ info }) => {
    // console.log(info);
    return (
        <div className='rounded-md p-5 flex flex-col gap-3 w-full' style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)" }}>
            <div className='flex justify-between' >
                <div style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)" }} className="rounded-md p-1">
                    <img src={logos[info.companyName.toLowerCase()]} alt="img" className="h-[80px] w-[80px] rounded-full"/>
                </div>
                <div>
                    <button className="bg-[#B0D9FF] p-2 rounded-lg h-[32px] flex">24h Ago</button>
                </div>
            </div>
            <div>
                <p className="font-semibold">{info.jobTitle}</p>
            </div>
            <div className="flex  text-gray-600 font-semibold gap-3">
                <div className="flex gap-1 items-center">
                    <BiUserPlus size={20} />
                    <p>1-3 yr Exp</p>
                </div>
                <div className="flex gap-1 text-gray-600">
                    <RiBuildingLine size={20} />
                    <p>Onsite</p>
                </div>
                <div className="flex gap-1 text-gray-600">
                    <GoStack size={20} />
                    <p>{info.salaryMax} LPA</p>
                </div>
            </div>
            <div className="text-gray-600 font-semibold text-[0.80rem] mt-2">
                <ul className="list-disc px-2">
                    <li>A user-friendly interface lets you browse stunning photos and videos</li>
                    <li>Filter destinations based on interests and travel style, and create personalized </li>
                </ul>
            </div>
            <div>
                <button className="text-center bg-[#00AAFF] text-white font-semibold p-2 w-[100%] rounded-md cursor">Apply Now</button>
            </div>
        </div>
    )
}

export default Jobcard