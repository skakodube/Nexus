export default interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description?: string;
  requirements?: { minimum: string; recommended: string };
}
