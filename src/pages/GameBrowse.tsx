import { HStack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGameQueryStore from "../store/gameQueryStore";

const GameBrowse = () => {
  const [columnDisplay, setColumnDisplay] = useState(false);
  const currentLocation = useLocation();

  const setTrending = useGameQueryStore((g) => g.setTrending);
  useEffect(() => {
    if (currentLocation.pathname === "/") {
      setTrending();
    }
  }, [currentLocation.pathname, setTrending]);
  return (
    <>
      <GameHeading />
      <HStack mb={7} justifyContent="space-between" w={"100%"}>
        <HStack spacing={2}>
          <SortSelector />
          <PlatformSelector />
        </HStack>
        <DisplaySelector
          columnDisplay={columnDisplay}
          setColumnDisplay={(columnDisplay) => setColumnDisplay(columnDisplay)}
        />
      </HStack>
      <GameGrid isSingleColumnDisplay={columnDisplay} />
    </>
  );
};

export default GameBrowse;
