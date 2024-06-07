import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description: string;
}

const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
