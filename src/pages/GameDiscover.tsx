import { HStack, Heading } from "@chakra-ui/react";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import DisplaySelector from "../components/DisplaySelector";
import GameGrid from "../components/GameGrid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGameQueryStore from "../store/gameQueryStore";

const GameDiscover = () => {
  const { timeframe } = useParams();

  const { setLastThirtyDays, setThisWeek, setNextWeek, resetGameQuery } =
    useGameQueryStore((state) => ({
      setLastThirtyDays: state.setLastThirtyDays,
      setThisWeek: state.setThisWeek,
      setNextWeek: state.setNextWeek,
      resetGameQuery: state.resetGameQuery,
    }));

  useEffect(() => {
    switch (timeframe) {
      case "last-30-days":
        setLastThirtyDays();
        break;
      case "this-week":
        setThisWeek();
        break;
      case "next-week":
        setNextWeek();
        break;
      default:
        resetGameQuery();
        break;
    }

    return resetGameQuery;
  }, [timeframe, setLastThirtyDays, setThisWeek, setNextWeek, resetGameQuery]);

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
