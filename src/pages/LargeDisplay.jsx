

import { lazy, useEffect, useState } from 'react'
import { featuredArticles, pdfs, videos } from '../constants'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { GiSelfLove } from "react-icons/gi";
import { TbEye } from "react-icons/tb";

const LargeDisplay = () => {
    const {linkParam} = useParams()
    const [video, setVideo] = useState(null)
    const [pdfs, setPdf] = useState(null)
    const [articles, setArticle] = useState(null)

    useEffect(() => {

        if(linkParam === 'video'){() => setVideo(true)}
        if(linkParam === 'pdf'){() => setPdf(true)}
        if(linkParam === 'article'){() => setArticle(true)}
    }, [linkParam]
    )

    console.log(video)
  return (
    <div>
        <Sidebar/>

        <div>

            <div>

            {video  && 
                <div>

                {videos.map(video => (
                // eslint-disable-next-line react/jsx-key
                <div className=" m-8 border-2 boxshadow rounded-lg">

                    <video 
                autoPlay
                muted
                loop
                loading={lazy}
                className={video ?"h-[250px] w-full object-cover" : 'bg-red'}
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
                        <h1>{video.creatorName}</h1>

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
            }
            </div>

            <div>

            {pdfs && 
                <div>
                            {pdfs.map((pdf) => (
                                // eslint-disable-next-line react/jsx-key
                                <div className="flex gap-10 boxshadow p-5 lg:p-1 border-2 m-5  lg:gap-0 rounded-xl
                            lg:w-[290px] lg:h-[200px] ">
                            
                    
                                <img alt='' 
                                className="w-[30%] h-[30%] object-cover lg:pr-3 rounded-lg lg:hidden"
                                src={pdf.imgUrl}/>
                    
                                <div className="lg:px-5 lg:w-full">
                    
                                {/* creator details */}
                                <div className="flex gap-3 pb-3">
                    
                                {!pdf.creatorImg ? 
                                    <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                                    :
                                    <img alt='img' src={pdf.creatorImg} 
                                    className='w-[25px] h-[25px] rounded-full object-cover' 
                                    />
                                    }
                    
                                <h1>{pdf.creatorName}</h1>
                                </div>
                    
                                <p className="font-bold">{pdf.caption}</p>
                    
                                <p className="font-extralight pt-1">{pdf.uni}</p>
                    
                                <button className="bg-gray-200 m-auto p-2  mt-5 rounded-lg">Download</button>
                                </div>
                    
                                </div>
            ))}

                </div>
            }
            </div>

            <div>

            {articles && 
                        <div 
                        className=" m-5 lg:flex lg:gap-2 lg:py-20 ">
                            {featuredArticles.map(article => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="">
                
                        <div className=" rounded-2xl border-2 border-emerald-100  my-5">
                
                            <img
                            alt='img'
                            // width={150}
                            className="img "
                            src={article.imgUrl}
                            />
                            <div className="px-3 ">
                
                            <h1 className="p-1 text-start font-bold">{article.title}</h1>
                            <h1 className="p-1 text-start">{article.caption}</h1>
                            </div>
                
                            <div className="flex items-center gap-3 m-5">
                            
                
                            {!article.creatorImg ? 
                            <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                            :
                            <img alt='img' src={article.creatorImg} 
                            className='w-[25px] h-[25px] rounded-full object-cover' 
                            />
                            }
                            <h1 className="text-start text-[15px]">{article.creatorName}</h1>
                            </div>
                
                        </div>
                
                        </div>
                            ))}
                    
                        </div>
            }
            </div>



        </div>
    </div>
  )
}

export default LargeDisplay
