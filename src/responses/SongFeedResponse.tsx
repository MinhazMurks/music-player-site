export type SongFeedResponse = {
  songs: Song[];
};

export type Song = {
  id: string;
  audioFile: string;
  name: string;
  art: string;
  artistId: string;
};
