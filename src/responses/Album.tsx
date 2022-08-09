import { ArtistResponse } from "./Artist";

export type AlbumFeedResponse = {
  albums: Album[];
};

export type Album = {
  id: string;
  artistUUID: string;
  artist: ArtistResponse | null;
  name: string;
  art: string;
  tags: string[];
  songs: AlbumSong[] | null;
};

export type AlbumSong = {
  id: string;
  albumUuid: string;
  songUuid: string;
};
