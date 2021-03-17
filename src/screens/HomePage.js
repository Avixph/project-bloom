import Header from "../components/Header";
import RandomJobList from "../components/RandomJobList";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home">
      <Header />
      <RandomJobList />
      <Footer />
    </div>
  );
}
