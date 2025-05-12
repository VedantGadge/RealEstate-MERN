import { HiLocationMarker } from "react-icons/hi";
import './SearchBar.css';

const SearchBar = ({ filter, setFilter, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(filter);
    }
  };

  return (
    <form className="flexCenter search-bar" onSubmit={handleSubmit}>
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title, city, country...."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="button" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
