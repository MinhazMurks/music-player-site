import "../Album/Album.css";
import { TopBar } from "../TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtType, SquareImage } from "../SquareImage";
import { AlbumFullResponse } from "../../responses/AlbumResponses";

function Album() {
  const [currentAlbum, setCurrentAlbum] = useState<AlbumFullResponse>();
  const { albumUUID } = useParams();
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;

  useEffect(() => {
    const getCurrentAlbum = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/album/${albumUUID}`,
          requestOptions,
        );
        const body: AlbumFullResponse = await response.json();
        if (body) {
          setCurrentAlbum(body);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentAlbum().then();
  }, []);

  return (
    <div className="albumPageContainer">
      <TopBar />
      <div className="albumPageBody">
        <div className="albumHeader">
          <SquareImage
            imageLink={currentAlbum?.art}
            artType={ArtType.Album}
            width="10vw"
          ></SquareImage>
          <div className="albumHeaderInfo">
            <span className="albumTitle">{currentAlbum?.name}</span>
            <span>{currentAlbum?.artist.name}</span>
          </div>
        </div>
        <div className="playlistContent">
          {currentAlbum?.songs.map((song, index) => {
            return (
              <div key={index} className="albumSong">
                <div className="albumSongInfo">{song.name}</div>
                <div className="albumSongInfo">{song.name}</div>
                <div className="albumSongInfo">{song.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Album;
