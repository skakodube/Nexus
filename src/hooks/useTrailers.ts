import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers"],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
