export const createArtistQuestion = (data) => {
  const song = {
    artist: data.song.artist,
    src: data.song.src
  };
  const answers = data.answers.map((it) => ({
    artist: it.artist,
    picture: it.picture
  }));

  return {song, answers, type: data.type};
};

export const createGenreQuestion = (data) => {
  const answers = data.answers.map((it) => ({
    src: it.src,
    genre: it.genre
  }));

  return {type: data.type, genre: data.genre, answers};
};
