import React from 'react'
import Jobcard from './Jobcard'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import { context } from './contextProvider';

const AllJobs = () => {

  const [jobs,setJobs] = useState([]);
  const {text,setText,loc,setLoc,type,setType,show} = useContext(context);
  useEffect(()=>{
    const getData = async () =>{
      try{
        const {data} = await axios.get("https://jobportal-backend-ucsl.onrender.com/posts");
        setJobs(data);
        console.log(data);
      }
      catch(err)
      {
        console.log("Error while fetching jobs",err);
      }
    }
    getData();

  },[show]);
  const newData = jobs.filter((ele) =>{
    return ele.companyName.toLowerCase().includes(text) || ele.jobTitle.toLowerCase().includes(text);
  }).filter((ele)=>{
    return ele.Location.includes(loc) && ele.jobType.includes(type);
  })
  return (
    <div className='grid grid-cols-4 justify-around w-full gap-5 mt-20 px-20'>
      {
        newData.map((ele)=>{
          return <Jobcard info={ele} key={ele._id}/>
        })
      }
      {
        newData.length == 0 && <div>No jobs found!</div>
      }
    </div>
  )
}

export default AllJobs
