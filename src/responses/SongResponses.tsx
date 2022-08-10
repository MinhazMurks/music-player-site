import { ArtistResponse } from "./ArtistResponses";

export type SongFullResponse = {
  id: string;
  audioFile: string;
  name: string;
  art: string;
  artist: ArtistResponse;
};

export type SongResponse = {
  id: string;
  audioFile: string;
  name: string;
  art: string;
  artistId: string;
};

export type SongFeedResponse = {
  songs: SongResponse[];
};
