"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
// import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const totalVideos = 4;
  const nextVdRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            const playVideo = async () => {
              await nextVdRef.current?.play();
            };
            playVideo();
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // const getVideoSrc = (index: number) => `video/hero-${index}.mp4`;

  const getVideoSrc = (index: number) => {
    const src = `video/hero-${index}.mp4`;
    // console.log("Video source:", src);
    return src;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden mb-20  rounded-lg">
      {loading && <div className="loading-spinner">Loading...</div>}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* <div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg border-2 border-green-500"> */}
          <div className="mask-clip-path z-50 w-64 h-64 cursor-pointer overflow-hidden rounded-lg ">
            {/* <VideoPreview> */}
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in  hover:scale-100 hover:opacity-100 rounded-lg"
            >
              <video
                ref={nextVdRef}
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                autoPlay
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
            {/* </VideoPreview> */}
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
              Redefine<span className="text-blue-200 font-black">n</span>e
            </h1>

            <p className="mt-4 mb-6 max-w-3xl text-lg leading-relaxed text-blue-100 font-light">
              Enter the{" "}
              <span className="font-semibold text-blue-300">
                Metagame Layer
              </span>
              , unleash the{" "}
              <span className="font-semibold text-purple-400">
                Play Economy
              </span>
              .
            </p>
            {/* <h1 className=" text-blue-100 font-bold text-5xl">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-200 text-2xl">
              Enter the Metagame Layer Unleash the Play Economy
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
