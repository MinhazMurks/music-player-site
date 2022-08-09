export type SongFeedResponse = {
  songs: SongResponse[];
};

export type SongResponse = {
  id: string;
  audioFile: string;
  name: string;
  art: string;
  artistId: string;
};
