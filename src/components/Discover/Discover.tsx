import "../Home/Home.css";
import { CurrentPage, TopBar } from "../TopBar";

function Discover() {
  return (
    <div>
      <div className="homeContainer">
        <TopBar currentPage={CurrentPage.Discover}></TopBar>
      </div>
    </div>
  );
}

export default Discover;
