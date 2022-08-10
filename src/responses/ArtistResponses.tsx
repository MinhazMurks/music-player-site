export type ArtistFeedResponse = {
  artists: ArtistResponse[];
};

export type ArtistResponse = {
  id: string;
  name: string;
  portrait: string;
};
