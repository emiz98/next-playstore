import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";

const AppCardFeatured = ({ icon, appId, title, category, rating }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/custom/${appId}`)}
      className="hover:bg-gray-100 p-3 pr-5 flex flex-row items-center
     max-w-sm cursor-pointer transition-all ease-in-out rounded-lg gap-x-5 w-full
     md:w-72"
    >
      <div
        className="bg-white rounded-2xl relative max-w-[5rem] object-contain
      shadow-md flex items-center justify-center overflow-hidden"
      >
        <Image priority height={150} width={150} src={icon} alt={title} />
      </div>

      <div className="text-gray-700 mt-2">
        <h4 className="text-left line-clamp-1">{title}</h4>
        <span className="text-xs line-clamp-1">{category}</span>
        <div className="flex items-center gap-x-1 mt-2 font-light">
          <span className="text-xs">{rating}</span>
          <StarIcon className="h-3 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AppCardFeatured;
