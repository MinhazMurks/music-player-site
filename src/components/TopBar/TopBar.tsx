import "./TopBar.css";
import { SearchBar } from "../SearchBar";
import { Login } from "../Login";

type TopBarProps = {
  selected?: String;
};

function TopBar(props: TopBarProps) {
  const currentPage = props.selected;

  console.log(currentPage);
  return (
    <div className="topBar">
      <div></div>
      <div className="navCenter">
        <SearchBar />
        <span>Home</span>
        <span>Collection</span>
      </div>
      <Login />
    </div>
  );
}

export default TopBar;
