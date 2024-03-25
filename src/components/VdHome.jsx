// import { robot } from "../assets";

import ReactPlayer from "react-player";

const VdHome = () => {
    const youtubeUrl = 'https://youtu.be/ywT3v0pTtuU?si=dDmun30JLSG3iciy'; 

  return (
    <div className="bg-[#C8E0EB] pt-[8%] pb-[8%] w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-fit gap-x-20">
        <div className="font-semibold text-[200%] md:text-md mb-2 text-white">
          Lorem ipsum dolor sit <br/> amet consectetur. <br/>Vulputate eget fames sit <br/> sed justo sagittis. Velit.
        </div>

        <div className="h-52 md:h-[50%] left-0 border rounded-lg border:bg-black">
          <ReactPlayer
            url={youtubeUrl}
            width="100%" 
            height="100%" 
            controls={true} 
            playing={false} 
          />
        </div>
      </div>
    </div>
    );
};

export default VdHome;
