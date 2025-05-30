
import MainEnergiaSolar from "@/components/MainEnergiaSolar";
import './page.css';
import MenuSolar from "@/components/MenuSolar";
import BannerMold from "@/components/BannerMold";

export default function Energiasolar() {


  return (
    <>
      <MenuSolar />
      <BannerMold
        cor="#1A2228"
        opacity={0.5}
        titulo={<>
          Transforme despesas em <span>economia </span>e <span>conforto</span>.
        </>}
        fontSize="clamp(1.25rem, 1.0769rem + 0.7692vw, 2.5rem)"
        lineHeight="clamp(1.75rem, 1.5769rem + 0.7692vw, 2.5rem)"
        hover="#FFA51E"
        logo="/assets/logos/mensch_solar_white.svg"
        type="solar"
        video="/assets/videos/video_solar.mp4"
      />
      <MainEnergiaSolar />
    </>
  )
}