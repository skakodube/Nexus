import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import Game from "../entities/Game";
import usePageData from "../store/pageDataStore";

const GameGrid = () => {
  const spinnerBgColor = useColorModeValue("gray.200", "gray.700");
  const spinnerColor = useColorModeValue("gray.400", "gray.600");
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);

  const isColumnDisplay = usePageData((s) => s.isColumnDisplay);
  const { data, isLoading, fetchNextPage, hasNextPage } = useGames();

  const columns = isColumnDisplay
    ? { base: 1 }
    : { base: 1, md: 2, lg: 3, xl: 4 };
  const currentColumns = useBreakpointValue(columns) ?? 1;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (isLoading)
    return (
      <SimpleGrid columns={currentColumns} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    );

  if (!fetchedGamesCount)
    return (
      <Center>
        <VStack marginY={8} spacing={4}>
          <Image
            boxSize={"90px"}
            src="https://rawg.io/assets/images/no-results.69f6b603a88b970899af402b59d84919.png"
          ></Image>
          <Text fontSize={"xl"} color="gray.500">
            No games found. Try clearing all filters.
          </Text>
        </VStack>
      </Center>
    );

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
        <GameCardContainer key={game.id}>
          <GameCard game={game} isWide={isColumnDisplay} />
        </GameCardContainer>
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
      style={{ overflow: "visible" }}
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
        {isColumnDisplay ? (
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
