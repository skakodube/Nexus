import { UseQueryResult, useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Platform } from "./usePlatforms";
import ms from "ms";

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
    staleTime: ms("24h"), // 24h
    enabled: platformId !== undefined && platformId !== null,
  });
};

export default usePlatform;
