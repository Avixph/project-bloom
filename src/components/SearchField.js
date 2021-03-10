// searching input + button
export default function SearchField() {


  return (
    <div className="flex">
      <input
        type="Search"
        placeholder="Search"
        // value={term} ---might use a react hook
        // onChange = {}
      />
      <button
        // onClick={ }
      >
        Search
      </button>
    </div>
  );
}
