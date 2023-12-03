/* eslint-disable react/jsx-key */


// import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { TbMessageCircleSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { navbarLinks } from "../constants";
// import { LiaSearchSolid } from "react-icons/lia";

// eslint-disable-next-line react/prop-types
const Navbar = ({explore}) => {
  const [memuItems, setMenuItems] = useState(false)
  const [active, setActive] = useState('')
  return (
    <>

    <div className=
    {explore && ' bg pb-[5rem] rounded-br-[5rem]'}>
    
    <div className="flex flex-col justify-between ">

    <div className={!explore ?"flex justify-between fixed w-full z-30 top-0 bg-white" 
      :'flex justify-between b-5 w-full fixed top-0 bg z-30'}>

        {/* logo */}
      <Link to='/#cgpa' className="text-2xl font-bold font-serif m-5">
        Rabbi
      </Link>

      {/* laptop menu items */}
      <div>
        <ul className="lg:flex hidden gap-10 sm:hidden cursor-pointer m-7">
          {navbarLinks.map(link => (
            <Link to={link.route}
            key={link.id}

            className={active === link.label ? "flex items-center gap-1  border-b-2" : 'flex items-center gap-1'}
            onClick={(() => setActive(link.label))}
            >
              {link.label} 
              </Link>

          ))}

        </ul>
      </div>

      {/* menu icon */}
      <div 
      className="text-2xl lg:hidden cursor-pointer m-5"
      onClick={() => setMenuItems(!memuItems)}
      >
        <RiMenuFoldFill/>
      </div>


      </div>

      {explore &&
        <div className="m-auto mt-20 flex items-center gap-10 lg:hidden">
          <p className="text-[35px] absolute pl-3 pr-4"><TbMessageCircleSearch/></p>
          <input className="py-4 px-[50px] rounded-2xl" placeholder="what are you looking for?">
            
          </input>
        </div>
        
      }

    </div>
   
      


    </div>



{memuItems &&
<div 
 
  className=" rounded-2xl fixed z-20 top-20  w-full ">
    <ul 
    className="  px-5 text-black rounded-2xl box3 bg to-slate-500    
    lg:hidden   ">

      <Link to='/home' className="p-4 text-lg w-full flex justify-center items-center gap-5 cursor-pointer hover:bg-slate-200 hover:rounded-lg">
        <RiCompassDiscoverFill/>
        <h1>Home</h1>
      </Link>

      
      <Link to='/tutors' className="p-4 text-lg flex justify-center cursor-pointer items-center gap-5 hover:bg-slate-200 hover:rounded-lg">
      <IoSchool/>
      <h1>tutors</h1>
      </Link>

      <Link to='/resources' className="p-4 text-lg flex justify-center cursor-pointer items-center gap-5 hover:bg-slate-200 hover:rounded-lg">
      <IoSchool/>
      <h1>explore</h1>
      </Link>


      <Link to='/allarticles' className="p-4 text-lg flex justify-center cursor-pointer items-center gap-5 hover:bg-slate-200 hover:rounded-lg">
        
      <BsInfoCircleFill/>
      <h1 className="flex items-center gap-1"> Articles </h1>

      </Link>

      <button className="px-7 my-5 box2 m-auto rounded-lg py-3 text-lg bg-white w-full hover:bg-slate-200 hover:rounded-lg">
        
      <Link to='/' >sign up</Link>
      </button>

    </ul>
  </div>
} 

    </>
    
  )
}

export default Navbar
