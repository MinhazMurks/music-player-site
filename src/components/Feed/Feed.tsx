import { useEffect, useState } from "react";
import env from "react-dotenv";
import {
  Playlist,
  PlaylistFeedResponse,
} from "../../responses/PlaylistFeedResponse";

function Feed() {
  const [feed, setFeed] = useState<Playlist[]>([]);

  const fetchFeed = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${env.MUSIC_PLAYER_SERVER_URL}/playlist/feed`, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result: PlaylistFeedResponse) => {
        console.log(result);
        setFeed(result.feed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const renderFeed = () => {
    return (
      <div>
        {feed.map((feedItem, index) => {
          return <div key={index}>{feedItem.name}</div>;
        })}
      </div>
    );
  };

  return <div>{renderFeed()}</div>;
}

export default Feed;
