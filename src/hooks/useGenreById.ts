import { GameQuery } from "../App";
import useDataById from "./useDataById";
import { Genre } from "./useGenres";

const useGenreById = (gameQuery: GameQuery, genre?: Genre) =>
  useDataById<Genre>("/genres", genre?.id, undefined, [gameQuery]);

export default useGenreById;
