import "../Album/Album.css";
import { CurrentPage, TopBar } from "../TopBar";

function Album() {
  return (
    <div className="albumPageContainer">
      <TopBar currentPage={CurrentPage.Discover}></TopBar>
      <div className="albumPageBody"></div>
    </div>
  );
}

export default Album;
