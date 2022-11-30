import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const AppHeader = ({ icon, title, dev, genre, rating }) => {
  return (
    <div className="flex items-center gap-x-10">
      <div
        className="bg-white object-contain max-w-[10rem] rounded-[2rem]
shadow-lg flex items-center justify-center overflow-hidden"
      >
        <Image height={200} width={200} src={icon} alt={title} />
      </div>

      <div className="">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
          <span className="font-medium mt-2 text-green-600">{dev}</span>
          <span className="text-sm text-gray-500">{genre}</span>
        </div>

        <div className="flex items-center gap-x-1 mt-2 font-light">
          <span className="text-sm">{rating}</span>
          <StarIcon className="h-4 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
