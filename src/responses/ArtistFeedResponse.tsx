export type ArtistFeedResponse = {
  artists: Artist[];
};

export type Artist = {
  id: string;
  musicUserUUID: string;
  name: string;
  art: string;
};
