import "../Playlist/Playlist.css";
import { CurrentPage, TopBar } from "../TopBar";

function Playlist() {
  return (
    <div className="playlistPageContainer">
      <TopBar currentPage={CurrentPage.Discover}></TopBar>
      <div></div>
    </div>
  );
}

export default Playlist;
