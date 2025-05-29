import { useContext } from "react"
import logo from "../assets/logo.jpg"
import { context } from "./contextProvider"

const Navbar = () => {
  const {show,setShow} = useContext(context);
  return (
    <div className='w-[100%] flex justify-center mt-7 text-[#303030] font-[600]'>
        <div className='flex items-center justify-around w-[60%] p-2 rounded-full' style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)" }}>
            <img src={logo} alt="" height={44} width={44.68}/>
            <p>Home</p>
            <p>Find Jobs</p>
            <p>Find Talents</p>
            <p>About us</p>
            <p>Testimonals</p>
            <button className="text-white bg-gradient-to-b from-[#A128FF] to-[#6100AD] p-1 rounded-full px-3 font-[500]" onClick={()=>setShow((prev)=>!prev)}>Create Jobs</button>
        </div>
    </div>
  )
}

export default Navbar