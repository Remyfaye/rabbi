import { HiCheck } from "react-icons/hi"

import { FaSquareArrowUpRight } from "react-icons/fa6";
// import { IoMdArrowDropright } from "react-icons/io";


const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white p-1 lg:flex lg:gap-20">
      <div className="m-5">
        <h1 className="font-bold py-3 text-[20px]">upgrade to premium</h1>
        <p className="font-light">enjoy the following benefits for just N300 per month</p>
        <ul className=" my-5 font-thin">
            <li className="flex items-center justify-between mb-2 border-b ">
                <h1 className="">assess to Rabbi tutors</h1>
                <span className="border-spacing-1 text-[19px]"><HiCheck/></span>
            </li>
            <li className="flex items-center justify-between mb-2 border-b ">
                Access to graded quizes 
                <span className="text-light text-[19px]"><HiCheck/></span>
            </li>
            <li className="flex items-center justify-between mb-2 border-b ">
                Add free experience
                <span className="text-light text-[19px]"><HiCheck/></span>
            </li>
        </ul>

        <button className="bg-emerald-400 m-auto px-7  mt-5 py-3 rounded-lg">
        upgrade
    </button>
      </div>

      <div className="m-5">
        <h1 className="font-bold py-3 text-[20px]">important links</h1>
        <ul className="font-thin">
            <li>about</li>
            <li>Become a tutor</li>
            <li>register</li>
            <li>contact us</li>
        </ul>
      </div>

      <div className="m-5">
        <h1 className="font-bold py-3 text-[20px]">About</h1>
        <p className="font-light">Rabbi is a platform where students can learn and earn</p>
        <p className="flex items-center gap-3 text-emerald-200 my-1">
            learn more
            <p className="bg-white text-black text-[20px] ">
            <FaSquareArrowUpRight/>
            </p>
        </p>
      </div>
    </div>
  )
}

export default Footer
