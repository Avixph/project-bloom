import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";

export default function SearchPage({ lightSwitch, dark }) {
  return (
    <div className="search">
      <Header handleLights={lightSwitch} dark={dark} />
      <SearchField  handleLights={lightSwitch} dark={dark} />
      <SearchJobList  handleLights={lightSwitch} dark={dark} />
      <Footer  handleLights={lightSwitch} dark={dark} />
    </div>
  );
}