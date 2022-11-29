import Image from "next/image";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Header = ({ setIsModelOpen }) => {
  return (
    <header
      className="sticky top-0 z-30 bg-white flex items-center 
    justify-between px-8 py-3 shadow-lg"
    >
      <div className="flex items-center">
        <Image width={50} height={50} src="/playstore.png" alt="logo" />
        <span className="hidden sm:inline-block font-medium text-gray-600 text-2xl">
          Google Play
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-1">
          <MagnifyingGlassIcon className="headerIcons" />
          <QuestionMarkCircleIcon className="hidden md:inline-flex headerIcons" />
          <Image
            width={45}
            height={45}
            className="headerIcons"
            alt="userImage"
            src="https://lh3.googleusercontent.com/a/ALm5wu0iXu2Cc-4MIC3OkNHItvrkzQKTqCeXs9CKEx4TnA=s32-c-k-cc"
          />
        </div>
        <button
          onClick={() => setIsModelOpen(true)}
          className="px-5 py-2 bg-blue-500 text-white font-medium
      rounded-md transition ease-in-out hover:bg-blue-600"
        >
          Add new App
        </button>
      </div>
    </header>
  );
};

export default Header;
