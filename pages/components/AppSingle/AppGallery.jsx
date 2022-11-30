import { Swiper, SwiperSlide } from "swiper/react";

const AppGallery = () => {
  return (
    <div>
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
            slidesPerView: 10,
          },
        }}
      >
        {categoryApps.data == null
          ? Array.from(Array(10)).map((_, i) => (
              <SwiperSlide key={i}>
                <AppCard loading />
              </SwiperSlide>
            ))
          : categoryApps.data.map(
              ({ appId, developer, icon, scoreText, title }, i) => (
                <SwiperSlide key={i}>
                  <AppCard
                    icon={icon}
                    appId={appId}
                    title={title}
                    category={developer}
                    rating={scoreText}
                  />
                </SwiperSlide>
              )
            )}
      </Swiper>
    </div>
  );
};

export default AppGallery;
