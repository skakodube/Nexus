import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description?: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });

export default usePlatforms;
