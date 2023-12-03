import { useState } from "react";
import Navbar from "../components/Navbar"
import { featuredArticles, filterbarLinks, navLinks, pdfs, videos } from "../constants"
// import { GiSelfLove } from "react-icons/gi";
// import { TbEye } from "react-icons/tb";
// // import { IoIosArrowDown } from "react-icons/io";
// import { lazy } from "react";
// import { Link } from "react-router-dom";
// import Upload from "../components/Upload";
import { IoFilterSharp } from "react-icons/io5";
import Videos from "../components/Videos";
import Article from "../components/Article";
// import FilterBar from "../components/FilterBar";
import {motion} from 'framer-motion' 
import Footer from "../components/Footer";


const Explore = () => {
  // const [noVideos, setNoVideos] = useState(null)
  const [dependent, setDependent] = useState('video')
  const [filterBar, setFilterBar] = useState(false)

  // useEffect(() => {
  //   if(videos.imgUrl === '') {
  //     return (<div>
  //       setNoVideos(true)
  //     </div>
  //     )
  //   }else{
  //     // alert(videos)
  //     setNoVideos(false)
  //   }
  // }, [])
  return (
    <div>
      <div className="lg:hidden">
        <Navbar explore/> 
      </div>

      <div className="flex">

        <div className="hidden z-20 lg:flex fixed bg-emerald-400 ">
          <Navbar laptopView/>
        </div>

        <div className="">

          {/* mobile navlink */}
          <div className=""> 
            <ul className="flex justify-evenly z-20 py-5 cursor-pointer lg:hidden">
            {navLinks.map((Link) => (

                <li
                key={Link.id}
                className={dependent === Link.dependent ? 'bg p-2 rounded-lg ':'bg-white  box3 p-2 rounded-lg '}
                onClick={
                  () => setDependent(Link.dependent)

                }
                >
                  <h1  className="text-center">{Link.title}</h1>
                </li>
            ))}

            <li 
            onClick={ () => setFilterBar(!filterBar)
            // <FilterBar/>
          }
            className=" text-lg font-inter flex justify-center text-center cursor-pointer items-center gap-1 ">
             <IoFilterSharp/>
            </li>

            </ul>

            {filterBar && 
              <div className="z-20 box2 px-10 my-4 w-full lg:hidden bg-white items-end absolute right-0">
                {filterbarLinks.map(filter => (
                  // eslint-disable-next-line react/jsx-key
                  <h1 className="box2  my-3 py-1 hover:bg-emerald-300">{filter.label}</h1>
                ))}
              </div>
            }

          </div>

          {/* laptop navlink */}
          <div className="">
            <ul className="fixed z-20 gap-5 items-center flex-wrap justify-center py-5 cursor-pointer hidden lg:flex pl-[25rem]">
            {navLinks.map((Link) => (

                <motion.li
                key={Link.id}
                transition={{
                  type:'tween',
                  ease:'easeIn',
                  delay:0.5,
                  duration:1
                }}
                className={ dependent === Link.dependent ? 'bg-emerald-500 p-2 rounded-xl ':'box2 p-2 rounded-lg bg-white'}
                onClick={

                  () => setDependent(Link.dependent)

                }
                >
                  <div className="flex items-center gap-3">
                    
                    <a href={`#${Link.id}`}>{Link.title}</a>
                    {/* <IoIosArrowDown/> */}
                  </div>
                </motion.li>
            ))}

<li 
            onClick={ () => setFilterBar(!filterBar)
            // <FilterBar/>
          }
            className=" text-lg font-inter flex justify-center text-center cursor-pointer items-center gap-1 ">
             <IoFilterSharp/>
            </li>

            {filterBar && 
              <div className="flex mx-5 gap-3 flex-wrap box2 px-10 my-10 top-[3rem] w-full bg-white absolute right-0">
                {filterbarLinks.map(filter => (
                  // eslint-disable-next-line react/jsx-key
                  <h1 className="box2 p-3 my-3 py-1 hover:bg-emerald-300">{filter.label}</h1>
                ))}
              </div>
            }

            </ul>


          </div>


          {/* display */}
          <div className="flex ">

            <div className="lg:flex lg:mt-[5rem] lg:flex-wrap lg:justify-center lg:flex-1">

              {/* mobile view */}
              <div className="lg:hidden">

                {dependent === 'video' &&
          
                <motion.div 
                initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{
                type:"tween",
                duration:2.5
              }}
                className="">

                    {videos.map(video => 
                    (
                    // eslint-disable-next-line react/jsx-key
                    <div 
                   
                    className=" ">
                      
                       <Videos video={video} mobile/>

                    </div>
                  ))} 
                
                </motion.div>

                }
              </div>

              {/* laptop view */}
              <div className="hidden lg:flex justify-center">

              {dependent === 'video' &&
              <div 
              className=" m-5 lg:flex lg:gap-2 flex-wrap justify-center">
                  {videos.map(video => (
              // eslint-disable-next-line react/jsx-key
              <div className="">
      
              <div className=" ">
      
             <Videos video={video} laptop/>
        
      
              </div>
      
              </div>
                  ))}
            
              </div>
                }
              </div>


              {dependent === 'pdf' &&
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{
                type:"tween",
                duration:1.5
              }}
              className="lg:flex justify-center flex-wrap p-3 m-5 gap-5">
              {pdfs.map((pdf) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex gap-4 box3 p-3 lg:p-1 border-2 mb-3 lg:gap-0 rounded-xl
        lg:w-[290px] lg:h-[200px] ">
      

          <img alt='' 
          className="w-[25%] m-auto h-[50%] bg-slate-600 object-cover lg:pr-3 rounded-lg lg:hidden"
          src={pdf.imgUrl}/>

          <div className="lg:px-5 lg:w-full w-full ">

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
            
              </motion.div>
              }

              {dependent === 'articles' &&
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{
                type:"tween",
                duration:1.5
              }}
              className=" m-5 lg:flex lg:gap-2 justify-center  flex-wrap">
                  {featuredArticles.map(article => (
              // eslint-disable-next-line react/jsx-key
              <div >
      
                  <Article article={article} explore/>
      
              </div>
      
                  ))}
            
              </motion.div>
              }

            {dependent === 'seminars' &&
              <div 
              className=" m-5 lg:flex lg:gap-2 justify-center  flex-wrap">
                  {featuredArticles.map(article => (
              // eslint-disable-next-line react/jsx-key
              <div >
      
                  <Article article={article} explore/>
      
              </div>
      
                  ))}
            
              </div>
              }


            
            </div>
          </div>

        </div>

      </div>

      {/* footer */}
      <Footer/>

     
    </div>
  )
}

export default Explore
