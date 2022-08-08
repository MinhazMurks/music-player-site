import "../SquareImage/SquareImage.css";

type SquareImageProps = {
  name?: string;
  imageLink?: string;
  backgroundImageLink?: string;
  width: string;
  artType: ArtType;
};

export enum ArtType {
  Artist = 0,
  Playlist = 1,
  Album = 2,
  Song = 3,
}

function SquareImage(props: SquareImageProps) {
  const defaultImagesMap: Record<ArtType, string> = {
    [ArtType.Artist]: "/images/placeholders/artist-placeholder.webp",
    [ArtType.Playlist]: "/images/placeholders/playlist-placeholder.webp",
    [ArtType.Album]: "/images/placeholders/album-placeholder.webp",
    [ArtType.Song]: "/images/placeholders/song-placeholder.webp",
  };

  const defaultBackgroundImage =
    "/images/placeholders/background-gradient.webp";
  const defaultBackgroundStyle = {
    backgroundImage: props.backgroundImageLink
      ? `url(${defaultBackgroundImage})`
      : `url(${defaultBackgroundImage})`,
    width: props.width,
  };

  return (
    <div className="squareImage" style={defaultBackgroundStyle}>
      <img
        src={
          props.imageLink ? props.imageLink : defaultImagesMap[props.artType]
        }
        alt={props.name ? props.name : ArtType[props.artType]}
      />
    </div>
  );
}

export default SquareImage;
