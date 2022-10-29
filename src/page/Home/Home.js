import SlideShow from "../../component/SlideShow/SlideShow";
import CustomCarousel from "../../component/CustomCarousel";

function Home() {
  // const data = [
  //   [
  //     {
  //       title: "Athena",
  //       description:
  //         "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
  //       logo: images.logoAthena,
  //       image: images.CyberPunk,
  //       trailer: videos.AthenaTrailer,
  //       type: "Fight-the-system TV Shows",
  //       cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
  //       genres: ["Korea", "TV Show"],
  //       thisShowIs: ["Dark", "Horror"],
  //     },

  const type = "New Bonus";

  return (
    <div>
      <SlideShow />
      <CustomCarousel />
    </div>
  );
}

export default Home;
