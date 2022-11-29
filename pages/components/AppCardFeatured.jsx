import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const AppCardFeatured = () => {
  return (
    <div>
      <div
        className="hover:bg-gray-100 p-3 pr-5 w-max flex flex-row items-center
     max-w-sm cursor-pointer transition-all ease-in-out rounded-lg gap-x-5"
      >
        <div
          className="bg-white object-contain rounded-2xl
      shadow-md flex items-center justify-center p-2"
        >
          <Image
            height={60}
            width={60}
            src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=s256-rw"
          />
        </div>

        <div className="text-gray-700 mt-2">
          <h4 className="text-left">Spotify: Music and Podcasts</h4>
          <span className="text-sm">Music & Audio</span>
          <div className="flex items-center gap-x-1 mt-2 font-light">
            <span className="text-sm">4.5</span>
            <StarIcon className="h-4 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCardFeatured;
