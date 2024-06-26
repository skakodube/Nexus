import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import tags from "../data/tags";
import APIClient from "../services/apiClient";
import Tag from "../entities/Tag";

const apiClient = new APIClient<Tag>("/tags");

const useTags = () =>
  useQuery({
    queryKey: ["tags"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: tags,
  });

export default useTags;
