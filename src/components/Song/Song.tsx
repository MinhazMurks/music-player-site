import "./Song.css";
import { useParams } from "react-router-dom";
import { TopBar } from "../TopBar";
import { useEffect, useState } from "react";
import { SongResponse } from "../../responses/SongResponses";
import { SongControls } from "../SongControls";

function Song() {
  const [currentSong, setCurrentSong] = useState<SongResponse>();
  const [currentSongAudio, setCurrentAudio] = useState<ArrayBuffer>();
  const { songUUID } = useParams();
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;
  const defaultBackgroundImage =
    "/images/placeholders/background-gradient.webp";
  const defaultBackgroundStyle = {
    backgroundImage: `url(${defaultBackgroundImage})`,
  };

  useEffect(() => {
    const getCurrentSongData = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/song/data/${songUUID}`,
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

    const getCurrentSongAudio = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "audio/mpeg",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/song/${songUUID}`,
          requestOptions,
        );
        if (response.body) {
          const reader = response.body.getReader();
          console.log(currentSongAudio);

          reader.read().then(async function processAudio({ done, value }) {
            if (done) {
              console.log("done");
            } else if (value.buffer) {
              setCurrentAudio(value.buffer);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentSongData().then();
    getCurrentSongAudio().then();
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
