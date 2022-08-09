import "../SongControls/SongControls.css";
import { SongResponse as SongResponse } from "../../responses/Song";

type SongControlsProps = {
  currentSong?: SongResponse;
};

function SongControls(props: SongControlsProps) {
  const defaultSongImage = "/images/placeholders/song-placeholder.webp";
  const shuffleButton = "/images/controls/shuffle-button.webp";
  const skipBackwardButton = "/images/controls/skip-backward-button.webp";
  // const pauseButton = "/images/controls/pause-button.webp";
  const playButton = "/images/controls/play-button.webp";
  const skipForwardButton = "/images/controls/skip-forward-button.webp";
  const loopButton = "/images/controls/loop-button.webp";

  const findImage = (artImageLink: string, defaultImageLink: string) => {
    if (artImageLink && artImageLink !== "") {
      return artImageLink;
    }
    return defaultImageLink;
  };

  const renderSongArt = () => {
    if (props.currentSong) {
      return (
        <div className="artDisplayContainer sides">
          <div className="artDisplay">
            <img
              src={findImage(props.currentSong.art, defaultSongImage)}
              alt=""
            />
          </div>
          <span>{props.currentSong.name}</span>
        </div>
      );
    }
  };

  return (
    <div className="songControlsContainer">
      {renderSongArt()}
      <div className="controlsContainer">
        <div className="smallControl">
          <img src={shuffleButton} alt="shuffle" />
        </div>
        <div className="control">
          <img src={skipBackwardButton} alt="skip backward" />
        </div>
        <div className="control">
          <img src={playButton} alt="play" />
        </div>
        <div className="control">
          <img src={skipForwardButton} alt="skip forward" />
        </div>
        <div className="smallControl">
          <img src={loopButton} alt="loop" />
        </div>
      </div>
      <div className="sides"></div>
    </div>
  );
}

export default SongControls;
