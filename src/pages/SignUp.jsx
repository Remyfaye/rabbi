
import { SiWelcometothejungle } from "react-icons/si";
// import { IoSchoolSharp } from "react-icons/io5";
import {motion} from 'framer-motion' 
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className=" bg h-[100vh] overflow-x-hidden p-5 lg:flex items-center justify-center gap-10">
        {/* left side */}
        <div className="flex flex-col items-center pb-5">
            <p className="text-3xl my-5"><SiWelcometothejungle/></p>
            <h1 className="font-bold text-2xl lg:text-3xl">Welcome</h1>
            <p className="text-center my-2 lg:text-xl">
                join thousands of students that use RAbbi to get better grades
            </p>
            <Link to='home' className="bg-white hover:from-pink-500 hover:to-yellow-500 px-7 py-3 rounded-2xl my-5 box3">Explore</Link>
        </div>

        {/* right side */}
        <motion.div 
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{
            type: 'tween',
            delay: 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        className="bg-white px-5 py-4 rounded-l-[6rem] boxshadow lg:w-[450px]">
            <h1 className='text-center text-2xl'>Register here</h1>
            <form>

                <div
                
                 className="lg:flex flex-col my-5">

                    <input className="my-2 box2 border-2 p-3 w-full" placeholder='name' />               
                    <input className="my-2 box2 border-2 p-3 w-full" placeholder='username'/>
                    <input className="my-2 box2 border-2 p-3 w-full" placeholder='email'/>
                    <input className="my-2 box2 border-2 p-3 w-full" placeholder='password'/>

                </div>
                
                <button className="bg box2 mb-7 flex justify-end px-7 py-3 rounded-lg">
                <p className="text-end "> Sign up</p>
                </button>

            </form>

        </motion.div>
      
    </div>
  )
}

export default SignUp
