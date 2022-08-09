export type ArtistFeedResponse = {
  artists: ArtistResponse[];
};

export type ArtistResponse = {
  id: string;
  musicUserUUID: string;
  name: string;
  art: string;
};
