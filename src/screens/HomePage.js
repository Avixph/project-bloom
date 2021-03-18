import Header from "../components/Header";
import RandomJobList from "../components/RandomJobList";
import Footer from "../components/Footer";

export default function HomePage({ lightSwitch, light }) {
  return (
    <div className="home">
      <Header lightSwitch={lightSwitch} />
      <RandomJobList dark={light} />
      <Footer />
    </div>
  );
}
