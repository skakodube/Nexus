import { UseQueryResult, useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatform = (
  platformId?: number | string
): UseQueryResult<Platform | null> => {
  return useQuery({
    queryKey: ["platform", platformId],
    queryFn: () => {
      if (platformId === undefined || platformId === null)
        return Promise.resolve(null);

      return apiClient.get(platformId);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    enabled: platformId !== undefined && platformId !== null,
  });
};

export default usePlatform;
