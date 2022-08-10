import { ArtistResponse } from "./ArtistResponses";
import { SongResponse } from "./SongResponses";

export type AlbumFullResponse = {
  id: string;
  artist: ArtistResponse;
  name: string;
  art: string;
  tags: string[];
  songs: SongResponse[];
};

export type AlbumResponse = {
  id: string;
  artistUUID: string;
  name: string;
  art: string;
  tags: string[];
};

export type AlbumFeedResponse = {
  albums: AlbumResponse[];
};
