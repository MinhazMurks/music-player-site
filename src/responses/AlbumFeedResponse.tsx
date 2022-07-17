import { Artist } from "./ArtistFeedResponse";

export type AlbumFeedResponse = {
  albums: Album[];
};

export type Album = {
  id: string;
  artistUUID: string;
  artist: Artist | null;
  name: string;
  tags: string[];
  songs: AlbumSong[] | null;
};

export type AlbumSong = {
  id: string;
  albumUuid: string;
  songUuid: string;
};
