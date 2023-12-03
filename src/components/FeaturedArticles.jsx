import { featuredArticles } from "../constants"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import { Link } from "react-router-dom";
import Article from "./Article";
// import { pers1 } from "../assets";



const FeaturedArticles = () => {
    
  return (
    <div className="p-5  mb-10">
        <h1 className="text-center font-bold text-[30px]">Articles</h1>
        <Swiper  cssMode={true}
        // navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=" pb-10 lg:hidden">
            {featuredArticles.map(article => (
        // eslint-disable-next-line react/jsx-key
        <div className="">

        <SwiperSlide>
          <Article article={article}/>

        </SwiperSlide>
          


        </div>
))}
      
        </Swiper>


        {/* laptop view */}
        <div 
        className=" hidden lg:flex  justify-center gap-3 flex-wrap lg:gap-2 lg:py-20 ">
            {featuredArticles.slice(0,6).map(article => (
        // eslint-disable-next-line react/jsx-key
              <Article article={article} laptopView/>
            ))}
      
        </div>

      
    </div>
  )
}

export default FeaturedArticles
