"use client";

import { bangers } from "./lib/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <audio
        src="/audio/background-music.mp3"
        autoPlay
        controls
      ></audio>
      <span className={`${bangers.className} m-8 p-8 text-7xl`}>
        Đi tìm từ khóa
      </span>
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            x: 150,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
        >
          <Link
            href="/rules"
            className={`${bangers.className} m-4 h-auto w-auto rounded-l-full rounded-r-full bg-gradient-to-b from-yellow-500 via-orange-500 to-orange-600 p-7 text-5xl text-white shadow-md transition-all duration-150 ease-linear`}
          >
            Bắt đầu chơi
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
