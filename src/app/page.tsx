import Main from "@/components/Main";
import Menu from "@/components/Menu";
import './page.css';
import { GoogleAnalytics } from "@next/third-parties/google";
import BannerMold from "@/components/BannerMold";

export default function Home() {
  return (
    <>
      <Menu page={''}/>
      <BannerMold 
        cor="#8B0625"
        opacity={0.3}
        titulo={<>
          Uma Jornada de <span>Servir</span> e <span>Transformar</span>.
        </>}
        fontSize="clamp(1.5rem, 1.1538rem + 1.5385vw, 3rem)"
        lineHeight="clamp(2rem, 1.6538rem + 1.5385vw, 3.5rem)"
        hover="#8B0625"
        logo="/assets/logos/grupo_mensch_white.svg"
        type="grupo"
        video="/assets/videos/video_banner_grupoMensch.mp4"
      />
      <Main />
      <GoogleAnalytics gaId="G-FE9N7BP8ZW" />
    </>
  );
}
