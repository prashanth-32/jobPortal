import { useContext } from "react"
import AllJobs from "./components/AllJobs"
import CreateJob from "./components/CreateJob"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import { context } from "./components/contextProvider"

function App() {
  const {show,setShow} = useContext(context);
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <AllJobs/>
      {show && <CreateJob/>}
    </div>
  )
}

export default App
