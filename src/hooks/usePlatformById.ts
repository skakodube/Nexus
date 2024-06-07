import { GameQuery } from "../App";
import useDataById from "./useDataById";
import { Platform } from "./usePlatforms";

const usePlatformById = (gameQuery: GameQuery, platform?: Platform) =>
  useDataById<Platform>("/platforms", platform?.id, undefined, [gameQuery]);

export default usePlatformById;
