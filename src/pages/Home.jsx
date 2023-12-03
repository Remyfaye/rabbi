import Cgpa from "../components/Cgpa"
import FeaturedArticles from "../components/FeaturedArticles"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Resources from "../components/Resources"
import Subscription from "../components/Subscription"
import Upload from "../components/Upload"
import {motion} from 'framer-motion' 




const Home = () => {
  return (
    <div className=" overflow-x-hidden" id="home">
      <Navbar/> 
      <Hero/>
      <Resources/>

      <div className="lg:flex lg:mt-20 lg:items-center">

        <Upload/>

        <p className='lg:w-[60%]'>
        <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{
        type: 'tween',
        delay: 0.1,
        duration: 1,
        ease: "easeIn",
      }}
      >
          <Subscription />
      </motion.div>
          </p>
      
      </div>
      <Cgpa/>


      <FeaturedArticles/>
      <Footer/>

    </div>
  )
}

export default Home
