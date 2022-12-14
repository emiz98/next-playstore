import Head from "next/head";
import Header from "./components/Header";
import AppCategory from "./components/AppCategory";
import AppCardFeatured from "./components/AppCardFeatured";
import AddApp from "./components/AddApp";
import { sanityClient, urlFor } from "../sanity";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Home = ({ categories, featuredData }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sliceNum, setSliceNum] = useState(2);

  const pagination = () => {
    if (sliceNum < categories.data.length) setSliceNum(sliceNum + 2);
    setIsLoadingMore(false);
  };
  return (
    <div
      className={`scrollbar-hide noSelect ${
        isModelOpen && "overflow-hidden h-screen w-screen"
      }`}
    >
      <Head>
        <title>Google Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setIsModelOpen={setIsModelOpen} />
      <main className="px-8 space-y-10 mt-10 select-none">
        <div>
          <h2 className="font-medium text-xl text-gray-600">My Apps</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 2xl:grid-cols-5 mt-5"
          >
            {featuredData.map(
              ({ packageName, dev, icon, rating, title }, i) => (
                <AppCardFeatured
                  key={i}
                  appId={packageName.current}
                  icon={urlFor(icon).url()}
                  title={title}
                  category={dev}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>

        {categories.data.slice(0, sliceNum).map((_, i) => (
          <AppCategory key={i} title={categories.data[i]} />
        ))}
      </main>
      <AnimatePresence>
        {isModelOpen && <AddApp setIsModelOpen={setIsModelOpen} />}
      </AnimatePresence>

      <div className="flex justify-center my-4">
        <button
          onClick={() => {
            setIsLoadingMore(true);
            pagination();
          }}
          className="flex items-center gap-x-1 border-2 transition ease-in-out text-blue-500
        border-blue-500 rounded-full px-5 py-2 hover:text-white hover:bg-blue-500"
        >
          {isLoadingMore && (
            <svg
              aria-hidden="true"
              className="mr-2 w-6 h-6 text-gray-300 animate-spin dark:text-gray-300 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}

          <span>{isLoadingMore ? "Loading" : "Load More"} </span>
        </button>
      </div>
      <footer className="text-sm mt-10 px-8 py-2 text-gray-500 font-light bg-gray-100">
        This app was only made for educational purposes only and only for
        hosting mobile applications.
      </footer>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  ).then((res) => res.json());
  // const featuredData = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeatured`
  // ).then((res) => res.json());

  const query = `*[_type == "app"]{
    title,
    dev,
    packageName,
    rating,
    icon,
    }`;

  const featuredData = await sanityClient.fetch(query);

  return {
    props: {
      categories,
      featuredData,
    },
  };
}
