
import { HiCheck } from "react-icons/hi";

const Subscription = () => {
  return (
    <div className=" rounded-xl  m-5 items-center shadow-3xl 
    boxshadow border-spacing-6">

    <div className=" flex flex-col justify-center items-center shadow-3xl">

      <h1 className=" text-white rounded-t-xl font-extralight text-center p-4 rou lg:mb-[-5]
       lg:text-[2rem] w-full text-[1.5rem] bg2 ">
        Subscription</h1>
        <h1 className="mt-4 text-[20px]">Rabbi Premium</h1>

        <div className="mt-4 flex flex-col items-center">
            <h1 className="text-[35px] font- text2">N300</h1>
            <span>per month</span>
        </div>

    </div>


    <div className="p-5">


    <ul className="">
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

    <button className="bg2 m-auto px-7 w-full mt-5 py-3 rounded-lg">
        upgrade
    </button>
    </div>

        

    </div>
  )
}

export default Subscription
