import Image from "next/image";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white flex items-center 
    justify-between px-8 py-3 shadow-lg"
    >
      <div className="flex items-center">
        <Image width={50} height={50} src="/playstore.png" alt="logo" />
        <span className="font-medium text-gray-600 text-2xl">Google Play</span>
      </div>
      <div className="flex items-center gap-x-1">
        <MagnifyingGlassIcon className="headerIcons" />
        <QuestionMarkCircleIcon className="headerIcons" />
        <Image
          width={45}
          height={45}
          className="headerIcons"
          src="https://lh3.googleusercontent.com/a/ALm5wu0iXu2Cc-4MIC3OkNHItvrkzQKTqCeXs9CKEx4TnA=s32-c-k-cc"
        />
      </div>
    </header>
  );
};

export default Header;
