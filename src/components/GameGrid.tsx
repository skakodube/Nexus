import {
  Box,
  Center,
  SimpleGrid,
  Spinner,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  columnDisplay: boolean;
}

const GameGrid = ({ columnDisplay }: Props) => {
  const spinnerBgColor = useColorModeValue("gray.200", "gray.700");
  const spinnerColor = useColorModeValue("gray.400", "gray.600");
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames();

  const columns = columnDisplay
    ? { base: 1 }
    : { base: 1, md: 2, lg: 3, xl: 4 };
  const currentColumns = useBreakpointValue(columns) ?? 1;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  const distributeCardsEvenly = (games: Game[], columns: number) => {
    // Create an array for each column
    const columnArrays: JSX.Element[][] = Array.from(
      { length: columns },
      () => []
    );

    // Distribute cards into columns
    games.forEach((game, index) => {
      const columnIndex = index % columns; // Determine the column index using modulo
      columnArrays[columnIndex].push(
        <Box mb={6}>
          <GameCardContainer key={game.id}>
            <GameCard game={game} wide={columnDisplay} />
          </GameCardContainer>
        </Box>
      );
    });

    return columnArrays;
  };

  // Gather all games from the fetched pages
  const allGames = data?.pages.flatMap((page) => page.results) || [];

  // Distribute all the fetched games into columns
  const distributedCards = distributeCardsEvenly(allGames, currentColumns);

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Center>
          <Box bg={spinnerBgColor} mb={3} padding={"8px 60px"} borderRadius={6}>
            <Spinner color={spinnerColor} mt={1} />
          </Box>
        </Center>
      }
    >
      <SimpleGrid columns={currentColumns} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {columnDisplay ? (
          <Center>
            {distributedCards.map((column, columnIndex) => (
              <Box key={columnIndex}>{column}</Box>
            ))}
          </Center>
        ) : (
          distributedCards.map((column, columnIndex) => (
            <Box key={columnIndex}>{column}</Box>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
