import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";

export default function SearchPage({ lightSwitch, dark }) {
  return (
    <div className="search">
      <Header lightSwitch={lightSwitch} dark={dark} />
      <SearchField dark={dark} />
      <SearchJobList dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
