// import { robot } from "../assets";

import ReactPlayer from "react-player";

const VdHome = () => {
    const youtubeUrl = 'https://youtu.be/ywT3v0pTtuU?si=dDmun30JLSG3iciy'; 

  return (
    <div className="bg-[#C8E0EB] pt-[8%] pb-[8%] w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-fit gap-x-20">
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
