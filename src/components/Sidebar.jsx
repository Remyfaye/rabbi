

import { Link } from "react-router-dom"
// import { RiMenuFoldFill } from "react-icons/ri";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
// import { TbMessageCircleSearch } from "react-icons/tb";




const Sidebar = () => {
    // const [noVideos, setNoVideos] = useState(null)
    // const [dependent, setDependent] = useState('video')
  
    // const navigate = useNavigate()

   
  return (
    <nav className="pr-10">

      <div className="flex flex-col gap-11 h-[100vh] ro r rounded-b-xl">
        <Link to='/' className="flex gap-3">
            <div className="flex  gap-2  items-center">

                <h2 className="font-bold text-2xl">Rabbi</h2>
            </div>
        </Link>


    <ul 
    className="  text-black rounded-2xl  rounded-br-[7rem]  text-center 
     flex flex-col items-start">
      <li 
      className="p-4 text-lg flex justify-center items-center gap-5 cursor-pointer hover:bg-slate-200 hover:rounded-lg">
        <RiCompassDiscoverFill/>
        <Link to='/home'>home</Link>
      </li>
      <li className="p-4 text-lg flex justify-center cursor-pointer items-center gap-5 hover:bg-slate-200 hover:rounded-lg">
      <IoSchool/> 
      <Link to='/resources'>explore</Link>
      </li>

      <li className="p-4 text-lg flex justify-center cursor-pointer items-center gap-5 hover:bg-slate-200 hover:rounded-lg">
        
      <BsInfoCircleFill/>
      <p >about</p>
      </li>


      

      <button className="px-7 rounded-lg py-3 m-5 text-lg bg-white margin-auto hover:bg-slate-200 hover:rounded-lg">
        
      <Link to='/'>register</Link>
      </button>

    </ul>




        <button  className="shad-button_ghost mb-[2rem] absolute bottom-10"
            //  onClick={}
            >
              {/* <img src="/assets/icons/logout.svg" alt='logo'/> */}
              <p className="samall-medium lg:base-medium mt-">Logout</p>
      </button>
       
      </div>

      
    </nav>
  )
}

export default Sidebar
