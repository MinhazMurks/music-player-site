import "../Discover/Discover.css";
import { CurrentPage, TopBar } from "../TopBar";

function Discover() {
  return (
    <div className="discoverContainer">
      <TopBar currentPage={CurrentPage.Discover}></TopBar>
    </div>
  );
}

export default Discover;
