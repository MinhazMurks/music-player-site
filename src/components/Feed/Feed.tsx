import "./Feed.css";
import { useEffect, useState } from "react";
import env from "react-dotenv";
import {
  Playlist,
  PlaylistFeedResponse,
} from "../../responses/PlaylistFeedResponse";
import { Album, AlbumFeedResponse } from "../../responses/AlbumFeedResponse";
import { Artist, ArtistFeedResponse } from "../../responses/ArtistFeedResponse";

function Feed() {
  const [artistFeed, setArtistFeed] = useState<Artist[]>([]);
  const [playlistFeed, setPlaylistFeed] = useState<Playlist[]>([]);
  const [albumFeed, setAlbumFeed] = useState<Album[]>([]);

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
          `${env.MUSIC_PLAYER_SERVER_URL}/artist/feed`,
          requestOptions,
        );
        const body: ArtistFeedResponse = await response.json();
        if (body) {
          console.log(body);
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
          `${env.MUSIC_PLAYER_SERVER_URL}/playlist/feed`,
          requestOptions,
        );
        const body: PlaylistFeedResponse = await response.json();
        if (body) {
          console.log(body);
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
          `${env.MUSIC_PLAYER_SERVER_URL}/album/feed`,
          requestOptions,
        );
        const body: AlbumFeedResponse = await response.json();
        if (body) {
          console.log(body);
          const newAlbumFeed = body.albums;
          setAlbumFeed(newAlbumFeed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtistFeed().then();
    fetchPlaylistFeed().then();
    fetchAlbumFeed().then();
  }, []);

  const renderArtistFeed = () => {
    if (artistFeed) {
      return (
        <div className="artistFeedContainer">
          {artistFeed.map((feedItem, index) => {
            return (
              <div className="artistFeedItem" key={index}>
                {feedItem.name}
              </div>
            );
          })}
        </div>
      );
    }
  };

  const renderPlaylistFeed = () => {
    if (playlistFeed) {
      return (
        <div className="playlistFeedContainer">
          {playlistFeed.map((feedItem, index) => {
            return (
              <div className="playlistFeedItem" key={index}>
                {feedItem.name}
              </div>
            );
          })}
        </div>
      );
    }
  };

  const renderAlbumFeed = () => {
    if (albumFeed) {
      return (
        <div className="albumFeedContainer">
          {albumFeed.map((feedItem, index) => {
            return (
              <div className="albumFeedItem" key={index}>
                {feedItem.name}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="feedContainer">
      {renderArtistFeed()}
      {renderPlaylistFeed()}
      {renderAlbumFeed()}
    </div>
  );
}

export default Feed;
