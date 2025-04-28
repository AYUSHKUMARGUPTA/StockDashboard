import React from "react";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        className="border rounded-lg p-2 w-80"
        placeholder="Search stock symbol..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
