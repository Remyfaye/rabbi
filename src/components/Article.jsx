/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { users } from "../constants"
import {motion} from 'framer-motion' 



// eslint-disable-next-line react/prop-types
const Article = ({article,laptopView,articlePage,explore,articlePageArticle,otherUserArticles,otherArticlesByUser}) => {
    const userId = article?.creatorId
    const aPuserId = articlePageArticle?.creatorId
    const artId = article?.id
    const [user] = users.filter(user => user.id === userId)
    const [aPuser] = users.filter(user => user.id === aPuserId)
    // console.log(aPuser)
  return (
    <div>
        {/* for home page */}
        {!articlePage && !explore &&
        <>
            {/* mobile view */}
            {!laptopView ?
              <div 
             className=" rounded-2xl border-2 border-emerald-100  mb-5 box3">

                  <img
                  alt='img'
                  // width={150}
                  className="img "
                  src={article?.imgUrl}
                  />
                  <div className="px-3 py-3 ">

                  <Link to={`/articles/${artId}`} className=" text-start font-bold">{article?.title}</Link>
                  <h1 className=" truncate p-1 text-start">{article?.caption}</h1>
                  </div>

                  <div className="flex items-center gap-3 m-5">
                  

                  {!article?.creatorImg ? 
                  <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                  :
                  <img alt='img' src={user?.imgUrl} 
                  className='w-[25px] h-[25px] rounded-full object-cover' 
                  />
                  }

                  <Link to={`/profile/${userId}`} className="text-start cursor-pointer text-[15px]">{user?.name}</Link >
                  </div>

              </div>
              :

              <motion.div 
              initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{
                type:'tween',
                duration:1
              }}
              className="w-[350px] box2 m-5 rounded-2xl border-2 border-emerald-100  ">
      
                  <img
                  alt='img'
                  // width={150}
                  className="img "
                  src={article.imgUrl}
                  />
                  <div className="px-3 h-[130px] overflow-y-hidden no-scrollbar ">
      
                  <Link to={`/articles/${article.id}`} className=" text-start font-bold">{article?.title}</Link>
                    <h1 className="p-1 h-[30%]  text-start">{article.caption}</h1>
                  </div>
      
                  <div className="flex items-center gap-3 m-5">
                    
      
                    {!article.creatorImg ? 
                    <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                    :
                    <img alt='img' src={user.imgUrl} 
                    className='w-[25px] h-[25px] rounded-full object-cover' 
                    />
                    }
                    <Link to={`/profile/${user.id}`} className="text-start cursor-pointer text-[15px]">{user.name}</Link>
                  </div>
      
              </motion.div>
      
            }
        </>
        }


        {/* for article page */}
        {articlePage && 
        <>
        
          {!otherUserArticles && 

            <motion.div 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{
              type:'tween',
              duration:1
            }}
            className="my-3 box2 border-b-2 p-2 rounded-lg">
                    <h1 className="font-bold">{articlePageArticle?.title}</h1>

                      {/* writers details */}
                      <div className="flex items-center gap-3 my-3">
                        <img src={aPuser?.imgUrl} className="w-7 h-7 rounded-full"/>
                        <h1>{aPuser?.name}</h1>
                      </div>

                      {/* content */}
                      <p className=" truncate">{articlePageArticle?.caption}</p>


            </motion.div>
            }


            {otherUserArticles && 

            <div 

            className=" my-1 box2  p-2 rounded-lg">

            {/* writers details */}
            <div className="flex items-center gap-3 my-3 ">
                <img src={otherArticlesByUser?.imgUrl} className="w-7 h-7 rounded-full"/>

                <div>

                  <h1 className="font-bold">{otherArticlesByUser?.title} </h1>
                  {/* content */}
                  <p className=" h-[30px] overflow-y-hidden">{otherArticlesByUser?.caption}</p>
                </div>

            </div>



            </div>
            }
        </>
        }

        {/* for all explore articlePage */}
        {explore && 

        <div className="flex gap-10 boxshadow lg:p-2 border-2 m-3  lg:gap-0 rounded-xl
        lg:w-[350px] lg:h-[380px]">

        <div className=" rounded-2xl  border-emerald-100  ">
           
           <img
              alt='img'
                  // width={150}
                  className="img "
              src={article.imgUrl}
            />

            {/* article description */}
            <div className="px-3 ">
      
              <h1 className="p-1 my-3 text-start font-bold">{article.title}</h1>
              <h1 className="p-1 h-[100px] overflow-y-hidden text-start">{article.caption}</h1>

            </div>
      
              <div className="flex items-center gap-3 m-5">
                    
                {!article.creatorImg ? 
                    <div className=" bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
                    :
                    <img alt='img' src={user.imgUrl} 
                    className='w-[25px] h-[25px] rounded-full object-cover' />
                }

                  <Link to={`/profile/${user.id}`} className="text-start text-[15px]">{user.name}</Link>
                  
              </div>

        </div>

        </div>

        }
        
    </div>
  )
}

export default Article
