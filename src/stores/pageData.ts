import { create } from "zustand";
import { getResizedImageUrl } from "../services/image-url";

interface PageDataStore {
  backgroundImage: string;
  setBackgroundImage: (image: string) => void;
  resetBackgroundImage: () => void;
}

const usePageData = create<PageDataStore>((set) => ({
  backgroundImage: "",
  setBackgroundImage: (image) =>
    set(() => ({ backgroundImage: getResizedImageUrl(image) })),
  resetBackgroundImage: () => set(() => ({ backgroundImage: "" })),
}));

export default usePageData;
