import Article from "../components/Article"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { featuredArticles } from "../constants"


const AllArticles = () => {
  return (
    <div>
        <Navbar/>

        <div className="mt-20 m-5">

            {/* top */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold my-3  text-xl">featured Articles</h1>
                <p className="my-8 text-center text-lg font-[250]">read up on topics that intrigue and pique your interest</p>
            </div>

            {/* bottom */}
            <div className="lg:flex flex-wrap  justify-center gap-3  lg:gap-2">
                {featuredArticles.map((article, index) => (
                    // eslint-disable-next-line react/jsx-key
                  <div> 
                   <div className="lg:hidden"> <Article  article={article} key={index} /></div>
                   <div className="hidden lg:flex"> <Article laptopView article={article} key={index} /></div>
                </div>
                    
                ))}
            </div>

        </div>
      
            {/* footer */}
            <Footer/>
    </div>
  )
}

export default AllArticles
