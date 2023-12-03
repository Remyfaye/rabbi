import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { featuredArticles, users } from "../constants"
import Article from "../components/Article"
import Footer from "../components/Footer"


const ArticlePage = () => {
    const {artId} = useParams()
    const [art] = featuredArticles.filter(art => art.id === artId)
    const userId = art.creatorId
    const otherArticles = featuredArticles.filter(otherArticle => otherArticle.id != artId)
    const otherArticlesByUser = featuredArticles.filter(otherArticle => otherArticle.id === artId)
    const [user] = users.filter(user => user.id === userId)
    console.log(otherArticles)
  return (
    <div>
        <Navbar/>

        <div className="bg-slate-100 h-[200vh]">

          {/* top image */}
          <img 
          className="mt-20 lg:h-[250px] h-[200px] w-full object-cover"
          src={art.imgUrl}/>


          {/* bottom part */}
          <div className=" lg:flex">

            {/* left part */}
            <div className="lg:w-[70%]  ">

              {/* content */}
              <div className="bg-white p-5 lg:rounded-lg lg:my-5 ">

                <h1 className="font-bold text-xl">{art.title}</h1>

                {/* writers details */}
                <div className="flex items-center gap-4 my-3">
                  <img src={user.imgUrl} className="w-10 h-10 rounded-full"/>
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </div>

                {/* content */}
                <p>{art.caption}</p>

              </div>

              {/* other articles by user */}
              <div className="pt-10 pb-5 px-5  bg-white mt-3 mb-10   lg:my-5 rounded-lg ">
                <h1 className="font-bold mb-5 text-emerald-600">other articles by {user.name}</h1>
                <div>
                {otherArticlesByUser?.map(article => (
                  // eslint-disable-next-line react/jsx-key
                  <Article otherArticlesByUser={article} articlePage otherUserArticles/>
                ))}
              </div>
                </div>

            </div>

            {/* right part */}
            <div className="p-5 mb-5 bg-white pb-4 lg:m-5 rounded-lg lg:w-[28%]">

              <div>
                <h1 className="font-bold text-emerald-600">other articles you may like</h1>
                <div>
                  {otherArticles?.map(article => (
                    // eslint-disable-next-line react/jsx-key
                    <Article articlePageArticle={article} articlePage/>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* footer */}
          <Footer/>


        </div>

      
    </div>
  )
}

export default ArticlePage
