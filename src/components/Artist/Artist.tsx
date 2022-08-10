import "../Artist/Artist.css";
import { TopBar } from "../TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistResponse } from "../../responses/ArtistResponses";
import { ArtType, SquareImage } from "../SquareImage";

function Artist() {
  const [currentArtist, setCurrentArtist] = useState<ArtistResponse>();
  const { artistUUID } = useParams();
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;

  useEffect(() => {
    const getCurrentArtist = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/artist/${artistUUID}`,
          requestOptions,
        );
        const body: ArtistResponse = await response.json();
        if (body) {
          setCurrentArtist(body);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentArtist().then();
  }, []);

  return (
    <div className="artistPageContainer">
      <TopBar />
      <div className="artistPageBody">
        <div className="artistHeader">
          <SquareImage
            imageLink={currentArtist?.portrait}
            artType={ArtType.Artist}
            width="10vw"
          ></SquareImage>
          <div className="artistHeaderInfo">
            <span className="artistTitle">{currentArtist?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
