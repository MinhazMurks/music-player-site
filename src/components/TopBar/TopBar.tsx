import "./TopBar.css";
import { SearchBar } from "../SearchBar";
import { ChangeEvent, useState } from "react";

/*
stupid
 @props awesome
 */
function TopBar(props: any) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="topBar">
      <SearchBar onChange={onChange} searchTerm={searchTerm} />
    </div>
  );
}

export default TopBar;
