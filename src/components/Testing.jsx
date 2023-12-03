

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { featuredArticles } from '../constants';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
          {featuredArticles.map(article => (
        // eslint-disable-next-line react/jsx-key
        <div className="swiper-slide">

<SwiperSlide>
    {article.caption}
</SwiperSlide>

        </div>
))}
       
       
      </Swiper>
    </>
  );
}
