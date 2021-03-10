
import Header from "../components/Header";
import Footer from "../components/Footer";
import LightsOut from "../components/LightsOut";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";

export default function SearchPage() {
  return (
    <div className="search">
      <Header />
      <LightsOut/> 
      <h2>Search Component</h2>
      <SearchField />
      <SearchJobList />
      <Footer />

    </div>
  );
}
