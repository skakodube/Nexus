import { useQuery, UseQueryResult } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Genre } from "./useGenres";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = (genreId?: number | string): UseQueryResult<Genre | null> => {
  return useQuery({
    queryKey: ["genre", genreId],
    queryFn: () => {
      if (genreId === undefined || genreId === null)
        return Promise.resolve(null);

      return apiClient.get(genreId);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    enabled: genreId !== undefined && genreId !== null,
  });
};

export default useGenre;
