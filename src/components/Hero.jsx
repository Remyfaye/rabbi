
import {motion} from 'framer-motion' 
import { Link } from 'react-router-dom'
import { heroimg, heroimg1, herovid } from '../assets'


const Hero = () => {
  return (
    <motion.div  
    initial={{  x:"100%"}}
    whileInView={{  x:0 }}
    onEnded={{x:0}}
    id='hero'
    transition={{
      type: 'spring',
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    }}
    
    >

      <div className="flex  mt-20 m-5 lg:m-10 lg:mt-[5px] lg:h-[100vh] flex-col lg:flex-row justify-center items-center">

        <div className=" lg:w-full ">
          <h1 className=" font-bold py-5 text-[23px] lg:text-2xl">
          A platform for students to make money by tutoring and providing educational materials
            </h1>

            <h1 className=" lg:text-[17px] font-light my-3 text-[13px] " >
            Discover pdf materials, tutorial videos, solved past questiions and assignment and get 
            access to one on one tutoring by our student tutors
            </h1>

  <div className="flex flex-col text-center lg:mt-0 justify-start mb-5 lg:flex-row lg:gap-10 lg:justify-start">

            <Link to='/' className="bg box2 text-black p-4 rounded-lg mt-6 capitalize ">
              become a tutor
            </Link>
            <Link to='/resources' className="bg box2 text-black p-4 shadow-iner rounded-lg mt-6 capitalize">
              find materials
            </Link>
  </div>

        </div>

        {/* <img  alt="loading" src="https://static.brainpop.com/images/common/newHomepage/BPLoader.gif"/> */}
      <video height="400" width="500" className='my-5 lg:my-0' autoPlay muted loop src={herovid}></video>

    
      </div>
    </motion.div>
    
  )
}

export default Hero
