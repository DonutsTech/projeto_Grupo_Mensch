import Header from "@/components/Header";
import Main from "@/components/Main";
import Menu from "@/components/Menu";
import './page.css';
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <Menu page={''}/>
      <Header />
      <Main />
      <GoogleAnalytics gaId="G-FE9N7BP8ZW" />
    </>
  );
}
