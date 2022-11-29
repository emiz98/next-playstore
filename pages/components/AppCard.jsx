import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const AppCard = () => {
  return (
    <div
      className="hover:bg-gray-100 p-2 w-max flex flex-col items-center
     max-w-[12rem] cursor-pointer transition-all ease-in-out rounded-lg"
    >
      <div
        className="bg-white object-contain w-full rounded-[2rem]
      shadow-md flex items-center justify-center p-2"
      >
        <Image
          height={150}
          width={150}
          src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=s256-rw"
        />
      </div>

      <div className="text-gray-700 mt-2">
        <h4 className="text-left">Spotify: Music and Podcasts</h4>
        <div className="flex items-center gap-x-1 mt-2 font-light">
          <span className="text-sm">4.5</span>
          <StarIcon className="h-4 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AppCard;
