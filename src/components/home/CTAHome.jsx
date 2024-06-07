import { LandingVid } from "../../assets";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/arrow_down.svg";
import { useState, useEffect } from "react";

const CTAHome = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    const video = document.querySelector("video");
    video.addEventListener("loadeddata", () => {
      setVideoLoaded(true);
      setVideoLoading(false);
    });
    setTimeout(() => {
      if (!videoLoaded) {
        setVideoLoading(false);
      }
    }, 5000);
  }, [videoLoaded]);

  return (
    <div
      className="h-full md:h-screen overflow-hidden relative"
      style={{
        backgroundColor: videoLoading ? "blue" : "transparent",
      }}
    >
      <video
        className="h-full md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0"
        src={LandingVid}
        autoPlay
        loop
        muted
        alt="img1"
      />

      <div className=" absolute md:z-50 text-[50%] md:text-[150%] text-left text-white w-full h-full md:top-0 flex items-end justify-start">
        <div className="ml-9 text-left text-shadow-lg mb-[15%]">
          <p className="md:text-7xl mb-4">Identiko Integrated Solutions</p>
          <p> We Are Your One-Stop Shop For Digital </p>
          <p> Identity, Verification, And Technology Solutions</p>{" "}
        </div>

        <Link to="#section-1">
          <div
            className="absolute bottom-24 left-0 right-0 mx-auto hidden md:flex justify-center
            items-center text-white font-bold rounded-full"
          >
            <div className="rounded-full p-3 animate-bounce">
              <img src={arrow_down} className="w-6 h-auto" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTAHome;
