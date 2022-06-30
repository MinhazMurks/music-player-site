function SearchBar(props: any) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          props.onChange(event);
        }}
        value={props.searchTerm}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
