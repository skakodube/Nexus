import { HStack, Heading } from "@chakra-ui/react";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import useGameQueryStore from "../store/gameQueryStore";

const GameDiscover = () => {
  const { timeframe } = useParams();
  const currentLocation = useLocation();

  const setLastThirtyDays = useGameQueryStore((s) => s.setLastThirtyDays);
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

  useEffect(() => {
    setLastThirtyDays();

    return resetGameQuery;
  }, [currentLocation.pathname, setLastThirtyDays]);

  return (
    <>
      <Heading
        textTransform={"capitalize"}
        mb={4}
        fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }}
      >
        {timeframe?.replace(/-/g, " ")}
      </Heading>
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

export default GameDiscover;
