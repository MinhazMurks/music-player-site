import "../Collection/Collection.css";
import { CurrentPage, TopBar } from "../TopBar";

function Collection() {
  return (
    <div className="collectionContainer">
      <TopBar currentPage={CurrentPage.Collection}></TopBar>
    </div>
  );
}

export default Collection;
