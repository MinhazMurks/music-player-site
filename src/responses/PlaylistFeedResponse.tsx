export type PlaylistFeedResponse = {
  playlists: Playlist[];
};

export type Playlist = {
  id: string;
  creatorUUID: string;
  name: string;
  art: string;
  tags: string[];
};
