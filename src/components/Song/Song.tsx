import "../Song/Song.css";
import { useParams } from "react-router-dom";
import { TopBar } from "../TopBar";
import { useEffect, useState } from "react";
import { SongResponse as SongResponse } from "../../responses/Song";
import { SongControls } from "../SongControls";

function Song() {
  const [currentSong, setCurrentSong] = useState<SongResponse>();
  const { songUUID } = useParams();
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;
  const defaultBackgroundImage =
    "/images/placeholders/background-gradient.webp";
  const defaultBackgroundStyle = {
    backgroundImage: `url(${defaultBackgroundImage})`,
  };

  useEffect(() => {
    const getCurrentSong = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/song/${songUUID}`,
          requestOptions,
        );
        const body: SongResponse = await response.json();
        if (body) {
          setCurrentSong(body);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentSong().then();
  }, []);

  const renderCurrentSong = () => {
    if (currentSong) {
      const defaultSongImage = "/images/placeholders/song-placeholder.webp";

      return (
        <div className="songCard" style={defaultBackgroundStyle}>
          <div className="songImage">
            <img
              src={findImage(currentSong.art, defaultSongImage)}
              alt={`${currentSong.name} art`}
            />
          </div>
        </div>
      );
    }
  };

  const findImage = (artImageLink: string, defaultImageLink: string) => {
    if (artImageLink && artImageLink !== "") {
      return artImageLink;
    }
    return defaultImageLink;
  };

  return (
    <div className="songContainer">
      <TopBar></TopBar>
      <div className="songBody">
        {renderCurrentSong()}
        <div className="songControlsContainer">
          <div className="songControls"></div>
        </div>
      </div>
      <SongControls currentSong={currentSong}></SongControls>
    </div>
  );
}

export default Song;
