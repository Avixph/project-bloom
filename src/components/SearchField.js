// searching input + button
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/searchJobSlice";

export default function SearchField() {
  const jobsRequest = useSelector((state) => state.searches.jobs);

  const dispatch = useDispatch();

  console.log(jobsRequest);

  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  console.log(search);

  // const handleSearchSubmit = () => {
  //   dispatch(fetchSearch({ limit: 10, field: search }));
  // };

  return (
    <div>
      {/* <form> */}
      <input
        type="Search"
        placeholder="Search"
        value={search}
        onChange={handleSearchInput}
      />

      <button
        onClick={() => dispatch(fetchSearch({ limit: 10, field: search }))}
      >
        Search
      </button>

      {/* </form> */}
    </div>
  );
}
