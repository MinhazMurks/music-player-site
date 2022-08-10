import { ArtistResponse } from "./ArtistResponses";

export type AlbumFullResponse = {
  id: string;
  artist: ArtistResponse;
  name: string;
  art: string;
  tags: string[];
  songs: AlbumSongResponse[];
};

export type AlbumResponse = {
  id: string;
  artistUUID: string;
  name: string;
  art: string;
  tags: string[];
};

export type AlbumSongResponse = {
  id: string;
  albumUuid: string;
  songUuid: string;
};

export type AlbumFeedResponse = {
  albums: AlbumResponse[];
};
