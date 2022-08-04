import "./TopBar.css";
import { SearchBar } from "../SearchBar";
import { Login } from "../Login";
import { Link } from "react-router-dom";

type TopBarProps = {
  currentPage?: CurrentPage;
  searchTerm?: string;
  focusSearchBar?: boolean;
};

export enum CurrentPage {
  Home = 0,
  Collection = 1,
  Discover = 2,
  Search = 3,
}

function TopBar(props: TopBarProps) {
  const linksList = ["Home", "Collection", "Discover"];

  const renderLinks = () => {
    return (
      <div className="navCenter">
        {linksList.map((link, index) => {
          if (props.currentPage === index) {
            return (
              <Link
                className="selected"
                to={`/${link.toLowerCase()}`}
                key={index}
              >
                {link}
              </Link>
            );
          } else {
            return (
              <Link
                className="unselected"
                to={`/${link.toLowerCase()}`}
                key={index}
              >
                {link}
              </Link>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="topBar">
      <div></div>
      <div className="navCenter">
        <SearchBar
          focusSearchBar={props.focusSearchBar}
          searchTerm={props.searchTerm}
        />
        {renderLinks()}
      </div>
      <Login />
    </div>
  );
}

export default TopBar;
