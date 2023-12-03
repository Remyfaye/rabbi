
import { FaCirclePlus } from "react-icons/fa6";
import {motion} from 'framer-motion' 


const Upload = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
      type:'tween',
      duration:1.5,
      ease:'easeIn'
    }}
    className="flex flex-col my-20 items-center justify-center m-5 py-5">
      <img
      className="w-[85%] "
      src="https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4702.jpg?size=626&ext=jpg&ga=GA1.1.1091888721.1700682718&semt=ais"
      />

        <h1 className="text-[25px] font-bold">upload files</h1>
        <p className="m-5 text-center">drag and drop the files you want to upload here</p>
        {/* <p className="p-5 text-[80px] text-slate-300"><FaCirclePlus/></p> */}
    </motion.div>
  )
}

export default Upload
