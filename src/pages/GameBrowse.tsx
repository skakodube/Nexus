import { HStack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";

const GameBrowse = () => {
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

export default GameBrowse;
