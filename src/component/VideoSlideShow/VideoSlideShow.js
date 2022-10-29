function VideoSlideShow(props) {
  return (
    <video autoPlay className="w-100">
      <source
        src={require("../../asset/video/" + props.trailer + ".mp4")}
        type="video/mp4"
      />
    </video>
  );
}

export default VideoSlideShow;
