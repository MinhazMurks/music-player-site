export type PlaylistFeedResponse = {
  feed: Playlist[];
};

export type Playlist = {
  id: string;
  creatorUUID: string;
  name: string;
  tags: string[];
};
