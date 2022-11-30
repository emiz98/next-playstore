import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const AppCard = ({ icon, appId, title, category, rating, loading }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${appId}`)}
      className={`p-2 w-max flex flex-col items-center
     max-w-[12rem] transition-all ease-in-out rounded-lg ${
       loading ? "h-40 !w-40 bg-gray-200" : "hover:bg-gray-100 cursor-pointer"
     }`}
    >
      <div
        className="bg-white object-contain max-w-[10rem] rounded-[2rem]
      shadow-md flex items-center justify-center overflow-hidden"
      >
        {!loading && (
          <Image priority height={150} width={150} src={icon} alt={title} />
        )}
      </div>

      {!loading ? (
        <div className="text-gray-700 mt-2 w-full flex flex-col">
          <h4 className="text-left flex line-clamp-2">{title}</h4>
          <div className="flex items-center gap-x-1 mt-2 font-light">
            <span className="text-sm">{rating}</span>
            <StarIcon className="h-4 object-contain" />
          </div>
        </div>
      ) : (
        <div className="text-gray-700 mt-2 w-full flex flex-col">
          <div className="w-3/4 h-5 bg-gray-400 rounded-sm animate-pulse" />
          <div className="flex items-center gap-x-1 mt-2 font-light">
            <div className="w-1/4 h-4 bg-gray-400 rounded-sm animate-pulse" />
            <StarIcon className="h-4 object-contain animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppCard;
