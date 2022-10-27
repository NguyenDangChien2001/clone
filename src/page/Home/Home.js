import SlideShow from "../../component/SlideShow/SlideShow";
import CustomCarousel from "../../component/CustomCarousel";
import { videos, images } from "../../asset";

function Home() {
  const title = "Athena";
  const video = videos.AthenaTrailer;
  const text = `Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện
  trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm
  của cuộc xung đột.`;
  const image = images.logoAthena;

  const carouselImages = [
    [
      images.CyberPunk,
      images.CuocGiaiCuuHangThaiLan,
      images.Dahmer,
      images.KomiKoTheGiaoTiep,
      images.ThanhMaTuy,
    ],
    [
      images.CyberPunk,
      images.CuocGiaiCuuHangThaiLan,
      images.Dahmer,
      images.KomiKoTheGiaoTiep,
      images.ThanhMaTuy,
    ],
    [
      images.CyberPunk,
      images.CuocGiaiCuuHangThaiLan,
      images.Dahmer,
      images.KomiKoTheGiaoTiep,
      images.ThanhMaTuy,
    ],
  ];

  const data = [
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
  ];

  const type = "New Bonus";

  return (
    <div>
      <SlideShow text={text} video={video} image={image} title={title} />
      <CustomCarousel type={type} carouselImages={carouselImages} data={data} />
    </div>
  );
}

export default Home;
