
import MainHealth from '@/components/MainHealth';
import './page.css';
import MenuHealth from '@/components/MenuHealth';
import BannerMold from '@/components/BannerMold';

export default function Health() {

  return (
    <>
      <MenuHealth />
      <BannerMold
        cor="#1A2228"
        opacity={0.5}
        titulo={<>
          Viver com <span>Saúde </span>e <span>Propósito</span>.
        </>}
        fontSize="clamp(1.25rem, 1.0769rem + 0.7692vw, 2.5rem)"
        lineHeight="clamp(1.75rem, 1.5769rem + 0.7692vw, 2.5rem)"
        hover="#F76861"
        logo="/assets/logos/mensch_health_white.svg"
        type="health"
        video="/assets/videos/video_health.mp4"
      />
      <MainHealth />
    </>
  )
};