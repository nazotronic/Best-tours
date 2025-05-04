
function VideoBackground() {
  return (
    <div className="video-container">
      <video src={`${process.env.PUBLIC_URL}/videos/background.mp4`} autoPlay muted loop></video>
    </div>
  );
}

export default VideoBackground;
