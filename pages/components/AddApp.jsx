import {
  XMarkIcon,
  PlusCircleIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const AddApp = ({ setIsModelOpen }) => {
  const imageFileRef = useRef(null);
  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    music_hash: "",
    image_hash: "",
    royalty_fee: 0.1,
  });
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute z-50 top-0 left-0 right-0 bottom-0 flex items-center backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
        }}
        className="relative mx-auto max-w-lg rounded-lg bg-gradient-to-r bg-white p-10 shadow-xl"
      >
        <XMarkIcon
          onClick={() => setIsModelOpen(false)}
          className="absolute w-8 object-contain top-3 right-5 cursor-pointer rounded-full border-2 border-gray-400 p-1
        text-gray-500 transition ease-out hover:bg-spotify hover:text-black hover:border-gray-500"
        />
        <div className="mt-5 flex items-start justify-between gap-x-5">
          <div
            style={{
              backgroundImage: `url(data:image/png;base64,${Buffer.from(
                input.image_hash
              ).toString("base64")})`,
            }}
            onClick={() => imageFileRef.current.click()}
            className={`group flex h-40 w-40 cursor-pointer flex-col items-center space-y-2 overflow-hidden
        rounded-lg border-2 border-blue-500 bg-white bg-cover bg-center p-10 text-center 
        text-gray-600 transition ease-out hover:bg-blue-100 hover:text-blue-500
        ${input.image_hash && "!text-white"}`}
          >
            <PlusCircleIcon className="text-4xl transition ease-out" />
            <span className="text-sm transition ease-out">App Logo</span>
          </div>

          <div className="flex flex-1 flex-col space-y-2">
            <input
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              className="rounded-lg px-4 py-2 outline-none"
              type="text"
              placeholder="App name"
            />
            <textarea
              className="rounded-lg px-4 py-2 outline-none"
              onChange={(e) => setInput({ ...input, subtitle: e.target.value })}
              value={input.subtitle}
              rows="4"
              placeholder="About the app"
            />
            <input
              ref={imageFileRef}
              type="file"
              accept=".png, .jpg, .jpeg, .gif"
              // onChange={addImage}
              hidden
              required
            />
          </div>
        </div>

        <div
          onClick={() => imageFileRef.current.click()}
          className="group mt-2 flex w-max cursor-pointer flex-row items-center overflow-hidden
        rounded-lg border-2 border-blue-500 bg-white bg-cover bg-center px-9 py-2 text-center 
        text-gray-600 transition ease-out hover:bg-blue-100 gap-x-2 hover:text-blue-500
        "
        >
          <PaperClipIcon className="w-6 transition ease-out" />
          <span className="text-sm transition ease-out text-left">Add APK</span>
        </div>

        <div className="space-y-2 py-8">
          <h2 className="">App Category</h2>
          <div className="flex items-center gap-x-2 pt-2">
            {/* <input
              value={input.royalty_fee}
              onChange={(e) =>
                setInput({ ...input, royalty_fee: e.target.value })
              }
              className="rounded-lg bg-gray-800 px-4 py-2 outline-none"
              type="number"
              placeholder="Enter amount (eth)"
            /> */}
          </div>
        </div>

        <div
          className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-spotify
          p-2 font-bold transition ease-out hover:bg-blue-600 bg-blue-500 text-white"
        >
          <span>Upload App</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddApp;
