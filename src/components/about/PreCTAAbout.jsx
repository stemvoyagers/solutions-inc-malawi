import { Link } from "react-router-dom";
import { AboutVid } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";
import { useState, useEffect } from "react";

const PreCTAAbout = () => {
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
        <div className="h-full md:h-screen overflow-hidden relative"
            style={{
                backgroundColor: videoLoading ? "blue" : "transparent",
            }}
        >
            <video className="h-full md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0" src={AboutVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 text-[50%] md:text-[150%]  ml-[6%] text-left mt-32 text-white w-full h-full md:top-0 flex items-center justify-start">
                <div className="text-left text-shadow-lg">
                    <p> Advancing Technology With Innovation, Best In Nigeria. </p>
                </div>

                <Link to="#section-1" className="absolute bottom-60 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden md:flex justify-center">
                    <p className="mr-40 animate-bounce text-center">  <img src={arrow_down} className="w-6 h-auto" /> </p>

                </Link>
            </div>

        </div>

    );
};

export default PreCTAAbout;
