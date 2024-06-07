import useData from "./useData";

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

const useTags = () => useData<Tag>("/tags");

export default useTags;
