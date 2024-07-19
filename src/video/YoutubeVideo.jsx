import ReactPlayer from 'react-player'; 

// eslint-disable-next-line react/prop-types
function YoutubeVideo({ youtubeUrl }) {
  return (
    <div className="w-1/2">
      <ReactPlayer
        url={youtubeUrl}
        width="300%"
        height="220px" 
        controls={true} 
        muted={true}
        playing={true} 
      />
    </div>
  );
}

export default YoutubeVideo;