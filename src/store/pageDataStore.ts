import { create } from "zustand";
import { getResizedImageUrl } from "../services/image-url";

interface PageDataStore {
  backgroundImage: string;
  isColumnDisplay: boolean;
  setBackgroundImage: (image: string) => void;
  resetBackgroundImage: () => void;
  setIsColumnDisplay: (isColumnDisplay: boolean) => void;
}

const usePageData = create<PageDataStore>((set) => ({
  backgroundImage: "",
  isColumnDisplay: false,
  setBackgroundImage: (image) =>
    set(() => ({ backgroundImage: getResizedImageUrl(image) })),
  resetBackgroundImage: () => set(() => ({ backgroundImage: "" })),
  setIsColumnDisplay: (isColumnDisplay) => set(() => ({ isColumnDisplay })),
}));

export default usePageData;
