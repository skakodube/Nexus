import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  tagId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setTagId: (tagId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  resetGameQuery: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setTagId: (tagId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, tagId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  resetGameQuery: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
