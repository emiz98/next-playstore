import Head from "next/head";
import Header from "./components/Header";
import AppCategory from "./components/AppCategory";
import AppCardFeatured from "./components/AppCardFeatured";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Google Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="px-8 space-y-10 mt-10">
        <div>
          <h2 className="font-medium text-xl text-gray-600">Featured Apps</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 2xl:grid-cols-5"
          >
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
            <AppCardFeatured />
          </div>
        </div>

        <AppCategory title="Recommended for you" />
        <AppCategory title="Productivity" />
        <AppCategory title="Tools & utilities" />
      </main>

      <footer className="text-sm mt-10 px-8 py-2 text-gray-500 font-light bg-gray-100">
        This app was only made for educational purposes only and only for
        hosting mobile applications.
      </footer>
    </div>
  );
};

export default Home;
