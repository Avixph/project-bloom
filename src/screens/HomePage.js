import Header from "../components/Header";
import RandomJobList from "../components/RandomJobList";
import Footer from "../components/Footer";

export default function HomePage({ lightSwitch, dark }) {
  return (
    <div className="home">
      <Header handleLights={lightSwitch} dark={dark} />
      <RandomJobList dark={dark} />
      <Footer dark = {dark} />
    </div>
  );
}
