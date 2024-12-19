import BannerMold from "@/components/BannerMold";
import MainAbout from "@/components/MainAbout";
// import './page.css';


export default function About() {
  return (
    <>
      <BannerMold
        cor="#8B0625"
        opacity={0.3}
        titulo={<>
          Nós somos <span>Mensch</span>.
        </>}
        fontSize="clamp(1.5rem, 1.1538rem + 1.5385vw, 3rem)"
        lineHeight="clamp(2rem, 1.6538rem + 1.5385vw, 3.5rem)"
        hover="#8B0625"
        logo="/assets/logos/grupo_mensch_white.svg"
        type="grupo"
        video="/assets/videos/video_about.mp4"
      />
      <MainAbout />
    </>
  )
}