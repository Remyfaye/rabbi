/* eslint-disable react/prop-types */
import { lazy } from "react"
import { Link } from "react-router-dom"

import { GiSelfLove } from "react-icons/gi";
import { TbEye } from "react-icons/tb";
import { users } from "../constants";
import {motion} from 'framer-motion' 


// eslint-disable-next-line react/prop-types
const Videos = ({video, laptop, mobile}) => {

    const userId = video.creatorId
    // const caption = video.caption
    const [user] = users.filter(user => user.id === userId)
    // const user = users
    console.log(userId)
  return (
    <div >

        {mobile && 

            <div className="lg:hidden rounded-lg">

                <div className=" m-8 border-2 boxshadow rounded-lg">

                    <video 
                    autoPlay
                    muted
                    loop
                    loading={lazy}
                    className={video ?"h-[250px] rounded-lg w-full object-cover" : 'bg-red'}
                    // eslint-disable-next-line react/prop-types
                    src={video.imgUrl}
                    />

                    <div className="p-5 ">

                    <Link to={`/videoPage/${video.id}`} className="mb-5 font-bold">{video.caption}</Link>

                    <div className="flex items-center justify-between">

                    <div className="flex gap-2">
                        {!video.creatorImg ? 
                        <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                        :
                        <img alt='img' src={video.creatorImg} 
                        className='w-[25px] h-[25px] rounded-full object-cover' 
                        />
                        }
                        <Link to={`/profile/${video.creatorId}`} >{user?.name}</Link>

                    </div>

                    <div className="flex gap-4 text-[20px]">
                        <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                        <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                    </div>
                    </div>
                    </div>

                </div>
                

            </div>
        }

        {laptop &&
        
        <motion.div initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{
          type:'tween',
          duration:1
        }} className="hidden lg:flex lg:justify-center flex-wrap mt-10">

            <div className="flex gap-10 justify-center boxshadow p-5 lg:p-1 border-2 m-5  lg:gap-0 rounded-xl
                lg:w-[350px] lg:h-[340px] ">

                <div className=" rounded-2xl  ">

                    <video 
                        autoPlay
                        muted
                        loop
                        loading={lazy}
                        className={video ?"h-[200px] w-full rounded-xl object-cover" : 'bg-red'}
                        src={video.imgUrl}
                    />

                    <div className="p-3 ">

                        {/* <h1 className="p-1 text-start font-bold">{video.title}</h1> */}
                        <div className="p-5 ">

                <Link to={`/videoPage/${video.id}`} className="mb-5 font-bold">{video.caption}</Link>

                <div className="flex items-center justify-between">

                <div className="flex gap-2">
                {!video.creatorImg ? 
                <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                :
                <img alt='img' src={video.creatorImg} 
                className='w-[25px] h-[25px] rounded-full object-cover' 
                />
                }
                <Link to={`/profile/${video.creatorId}`} >{user?.name}</Link>

                </div>

                <div className="flex gap-4 text-[20px]">
                <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                </div>
                </div>
                </div>
                    </div>



                </div>

            </div>

        </motion.div>
        }

    </div>
  )
}

export default Videos
