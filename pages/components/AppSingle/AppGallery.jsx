import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const AppGallery = ({ screenshots }) => {
  return (
    <div className="mt-10">
      <h2 className="font-medium text-lg mb-5">Screenshots</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
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
        }}
      >
        {screenshots.map((_, i) => (
          <SwiperSlide key={i}>
            <Image
              priority
              height={500}
              width={300}
              className="rounded-xl object-cover"
              src={screenshots[i]}
              alt="screenshot"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppGallery;
