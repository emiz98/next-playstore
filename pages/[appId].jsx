import Head from "next/head";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import AppHeader from "./components/AppSingle/AppHeader";
import { ArrowRightIcon, ShareIcon } from "@heroicons/react/24/outline";

const AppId = ({ appData, similarApps }) => {
  return (
    <div className={`scrollbar-hide noSelect`}>
      <Head>
        <title>Google Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="px-8 space-y-10 mt-10 select-none">
        <AppHeader
          icon={appData.data.icon}
          title={appData.data.title}
          dev={appData.data.developerId}
          genre={appData.data.genre}
          rating={appData.data.scoreText}
        />
        <div className="flex items-center gap-x-6">
          <button
            className="bg-green-600 rounded-lg px-5 
        py-2 w-48 text-white hover:bg-green-500 transition-all ease-in-out"
          >
            Install
          </button>
          <div
            className="cursor-pointer transition-all ease-in-out
          hover:bg-gray-200 p-3 rounded-full"
          >
            <ShareIcon className="h-6 object-contain text-green-600" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-x-4">
            <h2 className="font-medium text-lg">About this app</h2>
            <div
              className="cursor-pointer transition-all ease-in-out
          hover:bg-gray-200 p-3 rounded-full"
            >
              <ArrowRightIcon className="h-5 object-contain" />
            </div>
          </div>
          <p className="line-clamp-2 text-gray-500">
            {appData.data.description}
          </p>
        </div>

        <div className="text-gray-600">
          <h2 className="font-medium">Created on</h2>
          <span className="text-sm">{appData.data.released}</span>
        </div>

        <div>
          <h2 className="font-medium text-xl text-gray-600 mb-5">
            Similar apps
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
                slidesPerView: 10,
              },
            }}
          >
            {similarApps.data.map(
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
      </main>

      <footer className="text-sm mt-10 px-8 py-2 text-gray-500 font-light bg-gray-100">
        This app was only made for educational purposes only and only for
        hosting mobile applications.
      </footer>
    </div>
  );
};

export default AppId;

export async function getServerSideProps(context) {
  const appData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getApp?appId=${context.params.appId}`
  ).then((res) => res.json());
  const similarApps = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeatured`
  ).then((res) => res.json());

  return {
    props: {
      appData,
      similarApps,
    },
  };
}
