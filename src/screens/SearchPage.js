import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";

export default function SearchPage() {
  return (
    <div className="search">
      <Header />
      <h2>Search for Jobs</h2>
      <SearchField />
      <SearchJobList />
      <Footer />
    </div>
  );
}
