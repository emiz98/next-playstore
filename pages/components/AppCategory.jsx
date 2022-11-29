import { Swiper, SwiperSlide } from "swiper/react";
import AppCard from "./AppCard";

const AppCategory = ({ title }) => {
  return (
    <div>
      <h2 className="font-medium text-xl text-gray-600 mb-5">{title}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1366: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
        <SwiperSlide>
          <AppCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppCategory;
