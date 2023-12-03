import { Link, useParams } from "react-router-dom"
import { videos } from "../constants"
import Navbar from "./Navbar"
import { lazy } from "react"
import { GiSelfLove } from "react-icons/gi";
import { TbEye } from "react-icons/tb";
import Footer from "./Footer";


const VideoPage = () => {
    const {vidUrl} = useParams()
    const selectedVideo = videos.filter( video => video.id === vidUrl)
    const otherVideos = videos.filter( video => video.id != vidUrl)
    // console.log(selectedVideo)

  return (
    <div>
        <Navbar/>

        {selectedVideo &&
        <>
                    {selectedVideo.map(video => (
            // eslint-disable-next-line react/jsx-key
            <>
            <div className=" z-20 bg-white top-[3rem] mb-10 lg:hidden">
                <video 
                autoPlay
                
                loop
                controls
                loading={lazy}
                className={video ?"mt-10 w-full object-contain" : 'bg-red'}
                src={video.imgUrl}
                />

                <div className="m-5">
                    <h1 className="font-bold  text-lg">
                        {video.caption}
                    </h1>

                    <div className="flex items-center gap-10">
                        <div className="flex items-center">

                            <img className='w-10 h-10 object-cover rounded-full' src={video.creatorImg}/>

                            <p className="m-5 text-[20px]">
                                {video.creatorName}
                            </p>
                        </div>

                        <div className="flex gap-4 text-[20px]">
                            <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                            <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                        </div>
                    </div>

                </div>


            </div>

            <div className="hidden lg:block ">
                <video 
                autoPlay
                muted
                loop
                controls
                loading={lazy}
                className={video ?"mt-20 h-[500px] px-20 w-full object-cover" : 'bg-red'}
                src={video.imgUrl}
                />

                <div className="m-5">
                    <h1 className="font-bold  text-lg">
                        {video.caption}
                    </h1>

                    <div className="flex items-center gap-10">
                        <div className="flex items-center">

                            <img className='w-10 h-10 object-cover rounded-full' src={video.creatorImg}/>

                            <p className="m-5 text-[20px]">
                                {video.creatorName}
                            </p>
                        </div>

                        <div className="flex gap-4 text-[20px]">
                            <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                            <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                        </div>
                    </div>

                </div>


            </div>
            </>

        ))}
      
        </>
        }
       

        {/* other videos */}
        <div className="border border-t-2 mt-[3rem] lg:mt-20">
            <h1 className="font-bold text-[25px] m-5 mt-8">recomended videos</h1>

        <div className="lg:flex flex-wrap justify-center items-center">

            {otherVideos.slice(0,3).map(video => (
            // eslint-disable-next-line react/jsx-key
            <div className=" m-8 border-2 boxshadow rounded-lg lg:h-[350px] lg:w-[350px]">

                <video 
            autoPlay
            muted
            loop
            controls
            loading={lazy}
            className={video ?"h-[250px] rounded-lg w-full lg:h-[200px] lg:w-full object-cover" : 'bg-red'}
            src={video.imgUrl}
            />

            <div className="p-5 ">

                <Link to={`/videoPage/${video.id}`} className="mb-5 font-bold">{video.caption}</Link>

                <div className="flex items-center justify-between mt-5">

                    <div className="flex gap-2">
                        {!video.creatorImg ? 
                        <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                        :
                        <img alt='img' src={video.creatorImg} 
                        className='w-[25px] h-[25px] rounded-full object-cover' 
                        />
                        }
                        <h1 >{video.creatorName}</h1>

                    </div>

                    <div className="flex gap-4 text-[20px]">
                        <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                        <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                    </div>

                </div>
            </div>

            </div>
            ))} 

 

        </div>

        </div>

        {/* trending videos */}
                <div className="border border-t-4 mt-[2rem] lg:mt-20">
            <h1 className="font-bold text-[25px] m-5 mt-8">Trending videos</h1>

        <div className="lg:flex flex-wrap justify-center items-center">

            {otherVideos.slice(4,7).map(video => (
            // eslint-disable-next-line react/jsx-key
            <div className=" m-8 border-2 boxshadow rounded-lg lg:h-[350px] lg:w-[350px]">

                <video 
            autoPlay
            muted
            loop
            controls
            loading={lazy}
            className={video ?"h-[250px] rounded-lg w-full lg:h-[200px] lg:w-full object-cover" : 'bg-red'}
            src={video.imgUrl}
            />

            <div className="p-5 ">

                <Link to={`/videoPage/${video.id}`} className="mb-5 font-bold">{video.caption}</Link>

                <div className="flex items-center justify-between mt-5">

                    <div className="flex gap-2">
                        {!video.creatorImg ? 
                        <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                        :
                        <img alt='img' src={video.creatorImg} 
                        className='w-[25px] h-[25px] rounded-full object-cover' 
                        />
                        }
                        <h1 >{video.creatorName}</h1>

                    </div>

                    <div className="flex gap-4 text-[20px]">
                        <p className="flex items-center"><GiSelfLove/><small>{video.likes}</small></p>
                        <p className="flex items-center"><TbEye/><small>{video.views}</small></p>
                    </div>

                </div>
            </div>

            </div>
            ))} 



        </div>

        </div>

        <Footer/>


    </div>
  )
}

export default VideoPage
