import { HStack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useGameQueryStore from "../store/gameQueryStore";

const HomePage = () => {
  const currentLocation = useLocation();

  const setTrending = useGameQueryStore((g) => g.setTrending);
  const resetGameQuery = useGameQueryStore((g) => g.resetGameQuery);

  useEffect(() => {
    setTrending();

    return resetGameQuery;
  }, [currentLocation.pathname, setTrending]);
  return (
    <>
      <GameHeading />
      <HStack mb={7} justifyContent="space-between" w={"100%"}>
        <HStack spacing={2}>
          <SortSelector />
          <PlatformSelector />
        </HStack>
        <DisplaySelector />
      </HStack>
      <GameGrid />
    </>
  );
};

export default HomePage;
