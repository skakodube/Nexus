import moment from "moment";
import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  tagId?: number;
  sortOrder?: string;
  dates?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  resetAndsetGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  resetAndsetPlatformId: (platformId: number) => void;
  setTagId: (tagId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  resetGameQuery: () => void;
  setTrending: () => void;
  setLastThirtyDays: () => void;
  setThisWeek: () => void;
  setNextWeek: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { searchText: "" },
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  resetAndsetGenreId: (genreId) => set(() => ({ gameQuery: { genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  resetAndsetPlatformId: (platformId) =>
    set(() => ({ gameQuery: { platformId } })),
  setTagId: (tagId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, tagId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  resetGameQuery: () => set(() => ({ gameQuery: {} })),

  setTrending: () =>
    set(() => ({
      gameQuery: {
        sortOrder: "-released,-rating",
        dates: "2024-01-01,2024-12-31",
      },
    })),
  setLastThirtyDays: () =>
    set(() => ({
      gameQuery: {
        dates: `${moment()
          .subtract(30, "days")
          .format("YYYY-MM-DD")},${moment().format("YYYY-MM-DD")}`,
      },
    })),
  setThisWeek: () =>
    set(() => ({
      gameQuery: {
        dates: `${moment().format("YYYY-MM-DD")},${moment()
          .add(7, "days")
          .format("YYYY-MM-DD")}`,
      },
    })),
  setNextWeek: () =>
    set(() => ({
      gameQuery: {
        dates: `${moment().add(7, "days").format("YYYY-MM-DD")},${moment()
          .add(14, "days")
          .format("YYYY-MM-DD")}`,
      },
    })),
}));

export default useGameQueryStore;
