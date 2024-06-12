import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description?: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
