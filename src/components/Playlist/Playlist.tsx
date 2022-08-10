import "../Playlist/Playlist.css";
import { TopBar } from "../TopBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlaylistFullResponse } from "../../responses/PlaylistResponses";
import { ArtType, SquareImage } from "../SquareImage";

function Playlist() {
  const [currentPlaylist, setCurrentPlaylist] =
    useState<PlaylistFullResponse>();
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
        const body: PlaylistFullResponse = await response.json();
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
            <span>{currentPlaylist?.creator.username}</span>
          </div>
        </div>
        <div className="playlistContent">
          {currentPlaylist?.songs.map((song, index) => {
            return (
              <div key={index} className="playlistSong">
                <div className="playlistSongInfo">{song.name}</div>
                <div className="playlistSongInfo">{song.name}</div>
                <div className="playlistSongInfo">{song.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
