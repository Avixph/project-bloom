import Header from "../components/Header";
import RandomJobList from "../components/RandomJobList";
import Footer from "../components/Footer";

export default function HomePage({ lights, handleLights }) {
  return (
    <div className="home">
      <Header handleLights={handleLights} />
      <RandomJobList />
      <Footer />
    </div>
  );
}
