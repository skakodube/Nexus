import Developer from "./Developer";
import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";
import Store from "./Store";
import Tag from "./Tag";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genre[];
  tags: Tag[];
  developers: Developer[];
  publishers: Publisher[];
  esrb_rating: { id: number; name: string; slug: string };
  website: string;
  platforms: {
    platform: Platform;
    requirements: { minimum?: string; recommended?: string };
  }[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  released: string;
  added: number;
  description_raw: string;
  requirements: { minimum: string; recommended: string };
  playtime: number;
  short_screenshots: { id: number; image: string }[];
  updated?: string;
  stores: { id: number; url: string; store: Store }[];
}
