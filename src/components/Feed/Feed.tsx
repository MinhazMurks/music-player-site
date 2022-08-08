import "./Feed.css";
import { useEffect, useState } from "react";
import {
  PlaylistResponse,
  PlaylistFeedResponse,
} from "../../responses/PlaylistFeedResponse";
import { Album, AlbumFeedResponse } from "../../responses/AlbumFeedResponse";
import { Artist, ArtistFeedResponse } from "../../responses/ArtistFeedResponse";
import { Song, SongFeedResponse } from "../../responses/SongFeedResponse";
import { Link } from "react-router-dom";

function Feed() {
  const [artistFeed, setArtistFeed] = useState<Artist[]>([]);
  const [playlistFeed, setPlaylistFeed] = useState<PlaylistResponse[]>([]);
  const [albumFeed, setAlbumFeed] = useState<Album[]>([]);
  const [songFeed, setSongFeed] = useState<Song[]>([]);
  const { REACT_APP_MUSIC_PLAYER_SERVER_URL } = process.env;

  const defaultBackgroundImage =
    "/images/placeholders/background-gradient.webp";
  const defaultBackgroundStyle = {
    backgroundImage: `url(${defaultBackgroundImage})`,
  };
  const linkOverrideStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  useEffect(() => {
    const fetchArtistFeed = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/artist/feed`,
          requestOptions,
        );
        const body: ArtistFeedResponse = await response.json();
        if (body) {
          const newArtistFeed = body.artists;
          setArtistFeed(newArtistFeed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPlaylistFeed = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/playlist/feed`,
          requestOptions,
        );
        const body: PlaylistFeedResponse = await response.json();
        if (body) {
          const newPlaylistFeed = body.playlists;
          setPlaylistFeed(newPlaylistFeed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAlbumFeed = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/album/feed`,
          requestOptions,
        );
        const body: AlbumFeedResponse = await response.json();
        if (body) {
          const newAlbumFeed = body.albums;
          setAlbumFeed(newAlbumFeed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSongFeed = async () => {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `${REACT_APP_MUSIC_PLAYER_SERVER_URL}/song/feed`,
          requestOptions,
        );
        const body: SongFeedResponse = await response.json();
        if (body) {
          const newSongFeed = body.songs;
          setSongFeed(newSongFeed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtistFeed().then();
    fetchPlaylistFeed().then();
    fetchAlbumFeed().then();
    fetchSongFeed().then();
  }, []);

  const findImage = (artImageLink: string, defaultImageLink: string) => {
    if (artImageLink && artImageLink !== "") {
      return artImageLink;
    }
    return defaultImageLink;
  };

  const renderArtistFeed = () => {
    if (artistFeed) {
      const defaultArtistImage = "/images/placeholders/artist-placeholder.webp";
      return (
        <div className="feedRow">
          <span>Recommended Artists</span>
          <div className="feedItemsContainer">
            {artistFeed.map((feedItem, index) => {
              return (
                <div
                  className="feedItem"
                  key={index}
                  style={defaultBackgroundStyle}
                >
                  <div className="cardImage">
                    <img
                      src={findImage(feedItem.art, defaultArtistImage)}
                      alt="artist"
                    />
                  </div>
                  <span>{feedItem.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const renderPlaylistFeed = () => {
    if (playlistFeed) {
      const defaultPlaylistImage =
        "/images/placeholders/playlist-placeholder.webp";
      return (
        <div className="feedRow">
          <span>Recommended Playlists</span>
          <div className="feedItemsContainer">
            {playlistFeed.map((feedItem, index) => {
              return (
                <Link
                  to={`/playlist/${feedItem.id}`}
                  key={index}
                  style={linkOverrideStyle}
                >
                  <div className="feedItem" style={defaultBackgroundStyle}>
                    <div className="cardImage">
                      <img
                        src={findImage(feedItem.art, defaultPlaylistImage)}
                        alt="playlist"
                      />
                    </div>
                    <span>{feedItem.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const renderAlbumFeed = () => {
    if (albumFeed) {
      const defaultAlbumImage = "/images/placeholders/album-placeholder.webp";
      return (
        <div className="feedRow">
          <span>Recommended Albums</span>
          <div className="feedItemsContainer">
            {albumFeed.map((feedItem, index) => {
              return (
                <div
                  className="feedItem"
                  key={index}
                  style={defaultBackgroundStyle}
                >
                  <div className="cardImage">
                    <img
                      src={findImage(feedItem.art, defaultAlbumImage)}
                      alt="album"
                    />
                  </div>
                  <span>{feedItem.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const renderSongFeed = () => {
    if (songFeed) {
      const defaultSongImage = "/images/placeholders/song-placeholder.webp";
      return (
        <div className="feedRow">
          <span>Recommended Songs</span>
          <div className="feedItemsContainer">
            {songFeed.map((feedItem, index) => {
              return (
                <Link
                  to={`/song/${feedItem.id}`}
                  key={index}
                  style={linkOverrideStyle}
                >
                  <div className="feedItem" style={defaultBackgroundStyle}>
                    <div className="cardImage">
                      <img
                        src={findImage(feedItem.art, defaultSongImage)}
                        alt="song"
                      />
                    </div>
                    <span>{feedItem.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="feedContainer">
      {renderArtistFeed()}
      {renderPlaylistFeed()}
      {renderAlbumFeed()}
      {renderSongFeed()}
    </div>
  );
}

export default Feed;
