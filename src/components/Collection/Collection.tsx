import "../Home/Home.css";
import { CurrentPage, TopBar } from "../TopBar";

function Collection() {
  return (
    <div>
      <div className="homeContainer">
        <TopBar currentPage={CurrentPage.Collection}></TopBar>
      </div>
    </div>
  );
}

export default Collection;
