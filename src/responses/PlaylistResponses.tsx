import { MusicUserResponse } from "./MusicUserResponses";
import { SongResponse } from "./SongResponses";

export type PlaylistFeedResponse = {
  playlists: PlaylistResponse[];
};

export type PlaylistFullResponse = {
  id: string;
  creator: MusicUserResponse;
  name: string;
  art: string;
  songs: SongResponse[];
  tags: string[];
};

export type PlaylistResponse = {
  id: string;
  creatorUUID: string;
  name: string;
  art: string;
  tags: string[];
};
