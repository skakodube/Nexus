import { HStack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";
import { useState } from "react";

const GameBrowse = () => {
  const [columnDisplay, setColumnDisplay] = useState(false);

  return (
    <>
      <GameHeading />
      <HStack mb={4} justifyContent="space-between" w={"100%"}>
        <HStack spacing={2}>
          <SortSelector />
          <PlatformSelector />
        </HStack>
        <DisplaySelector
          columnDisplay={columnDisplay}
          setColumnDisplay={(columnDisplay) => setColumnDisplay(columnDisplay)}
        />
      </HStack>
      <GameGrid columnDisplay={columnDisplay} />
    </>
  );
};

export default GameBrowse;
