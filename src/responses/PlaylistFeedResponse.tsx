export type PlaylistFeedResponse = {
  playlists: PlaylistResponse[];
};

export type PlaylistResponse = {
  id: string;
  creatorUUID: string;
  name: string;
  art: string;
  tags: string[];
};
