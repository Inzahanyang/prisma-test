import client from "../client";

export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: () => ({ title: "noJam", year: 2020 }),
  },
};
