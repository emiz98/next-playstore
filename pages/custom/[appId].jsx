import Head from "next/head";
import Header from "../components/Header";
import AppHeader from "../components/AppSingle/AppHeader";
import AppCard from "../components/AppCard";
import AppCardFeatured from "../components/AppCardFeatured";
import { Swiper, SwiperSlide } from "swiper/react";
import { sanityClient, urlFor } from "../../sanity";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { ArrowRightIcon, ShareIcon } from "@heroicons/react/24/outline";

const AppId = ({ appData, similarApps }) => {
  return (
    <div className={`noSelect`}>
      <Head>
        <title>Google Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="px-10 2xl:px-80 space-y-10 mt-10 select-none 2xl:grid grid-cols-12 gap-x-20">
        <div className="col-span-8 2xl:col-span-9">
          <AppHeader
            icon={urlFor(appData[0].icon).url()}
            title={appData[0].title}
            dev={appData[0].dev}
            genre={appData[0].genre}
            rating={appData[0].rating}
          />
          <div className="flex items-center gap-x-2 mt-10">
            <button
              className="bg-green-600 rounded-lg px-5 
        py-2 w-48 text-white hover:bg-green-500 transition-all ease-in-out"
            >
              Install
            </button>
            <div
              className="cursor-pointer transition-all ease-in-out
          hover:bg-gray-200 p-2 rounded-lg border-2 border-green-600"
            >
              <ShareIcon className="h-5 object-contain text-green-600" />
            </div>
          </div>

          <div className="mt-10">
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
              {appData[0].description}
            </p>
          </div>

          <div className="text-gray-600 mt-5">
            <h2 className="font-medium">Created on</h2>
            <span className="text-sm">{appData[0].publishedAt}</span>
          </div>
        </div>

        <div className="col-span-4 2xl:col-span-3">
          <h2 className="font-medium text-xl text-gray-600 mb-5">
            Similar apps
          </h2>
          <div className="hidden 2xl:inline-block">
            {similarApps.data.map(
              ({ appId, developer, icon, scoreText, title }, i) => (
                <AppCardFeatured
                  key={i}
                  appId={appId}
                  icon={icon}
                  title={title}
                  category={developer}
                  rating={scoreText}
                />
              )
            )}
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            className="mySwiper inline-block 2xl:hidden"
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
  const query = `*[_type == "app" && packageName.current==$appSlug]{
    title,
    dev,
    packageName,
    description,
    rating,
    icon,
    apk,
    "categories":categories[]->,
    publishedAt
    }`;

  const appData = await sanityClient.fetch(query, {
    appSlug: context.params.appId,
  });

  const similarApps = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSimilarApps2?category=${appData[0].categories[0].title}`
  ).then((res) => res.json());
  return {
    props: {
      appData,
      similarApps,
    },
  };
}
