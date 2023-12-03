/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {motion} from 'framer-motion' 



// eslint-disable-next-line react/prop-types
const Tutor = ({user}) => {
  return (
    <motion.div  initial={{scale:0}}
    whileInView={{scale:1}}
    transition={{
      type:'tween',
      duration:1
    }}>
            <div className="boxshadow lg:p-1 border-2 m-3  lg:gap-0 rounded-xl
        lg:w-[350px] lg:h-[350px]">

        <div className=" rounded-2xl  border-emerald-100  ">
           
           <img
              alt='img'
                  // width={150}
                  className="w-full h-[200px] object-cover rounded-xl mb-4"
              src={user.imgUrl}
            />

            {/* user description */}
            <div className="px-3 ">
      
              <Link to={`/profile/${user.id}`} className=" mx-1 text-lg text-start font-bold">{user.name}</Link>
              <h1 className="p-1 mb-2  ">{user.bio}</h1>
              <h1 className="p-1 my-2 font-[300] text-emerald-400">{user.uni}</h1>

            </div>
      
        </div>

        </div>
    </motion.div>
  )
}

export default Tutor
