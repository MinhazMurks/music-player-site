import "../Playlist/Playlist.css";
import { TopBar } from "../TopBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlaylistResponse } from "../../responses/Playlist";
import { ArtType, SquareImage } from "../SquareImage";

function Playlist() {
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistResponse>();
  const { playlistUUID } = useParams();
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;

  useEffect(() => {
    const getCurrentPlaylist = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/playlist/${playlistUUID}`,
          requestOptions,
        );
        const body: PlaylistResponse = await response.json();
        if (body) {
          setCurrentPlaylist(body);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentPlaylist().then();
  }, []);

  return (
    <div className="playlistPageContainer">
      <TopBar />
      <div className="playlistPageBody">
        <div className="playlistHeader">
          <SquareImage
            imageLink={currentPlaylist?.art}
            artType={ArtType.Playlist}
            width="10vw"
          ></SquareImage>
          <div className="playlistHeaderInfo">
            <span className="playlistTitle">{currentPlaylist?.name}</span>
            <span>Artist</span>
          </div>
        </div>
        <div className="playlistContent"></div>
      </div>
    </div>
  );
}

export default Playlist;
