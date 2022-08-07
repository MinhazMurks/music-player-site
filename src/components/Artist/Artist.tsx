import "../Artist/Artist.css";
import { TopBar } from "../TopBar";

function Artist() {
  return (
    <div className="artistPageContainer">
      <TopBar />
      <div className="artistPageBody"></div>
    </div>
  );
}

export default Artist;
