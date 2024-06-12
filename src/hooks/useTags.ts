import { useQuery } from "@tanstack/react-query";
import tags from "../data/tags";
import APIClient from "../services/apiClient";

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Tag>("/tags");

const useTags = () =>
  useQuery({
    queryKey: ["tags"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: tags,
  });

export default useTags;
