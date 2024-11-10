
import MainHealth from '@/components/MainHealth';
import './page.css';
import BannerHealth from '@/components/BannerHealth';
import MenuHealth from '@/components/MenuHealth';

export default function Health() {

  return (
    <>
      <MenuHealth />
      <BannerHealth />
      <MainHealth />
    </>
  )
};