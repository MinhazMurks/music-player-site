import "./TopBar.css";
import { SearchBar } from "../SearchBar";
import { Login } from "../Login";

function TopBar() {
  return (
    <div className="topBar">
      <div></div>
      <SearchBar />
      <Login />
    </div>
  );
}

export default TopBar;
