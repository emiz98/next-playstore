import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AppCard from "./AppCard";

const AppCategory = ({ title }) => {
  const [categoryApps, setCategoryApps] = useState([]);

  useEffect(() => {
    getAppsByCategory();
  }, []);

  const titleFormatted = (title) => {
    var temp = title.split("_").join(" ");
    var titleNew = temp.charAt(0).toUpperCase() + temp.toLowerCase().slice(1);
    return titleNew;
  };

  const getAppsByCategory = async () => {
    await fetch(`http://localhost:3000/api/getCategoryApps?category=${title}`)
      .then((res) => res.json())
      .then((json) => setCategoryApps(json));
  };

  return (
    <div>
      <h2 className="font-medium text-xl text-gray-600 mb-5">
        {titleFormatted(title)}
      </h2>

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

export default AppCategory;
