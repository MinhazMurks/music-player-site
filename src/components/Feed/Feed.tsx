import { useEffect, useState } from "react";
import env from "react-dotenv";
import { FeedItem, FeedResponse } from "../../responses/FeedResponse";

function Feed() {
  const [feed, setFeed] = useState<FeedItem[]>([]);

  const fetchFeed = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${env.MUSIC_PLAYER_SERVER_URL}feed`, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result: FeedResponse) => {
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
