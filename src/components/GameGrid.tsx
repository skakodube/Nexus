import { Box, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);

  if (error) return <Text>{error}</Text>;

  const columns = { base: 1, md: 2, lg: 3, xl: 4 };
  const currentColumns = useBreakpointValue(columns) ?? 1;

  const cardDistribute = (games: Game[]): JSX.Element[] => {
    const distributedCards: JSX.Element[] = [];

    games.forEach((game) => {
      distributedCards.push(
        <Box key={game.id} mb={6}>
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        </Box>
      );
    });

    return distributedCards;
  };

  const distributedCards = cardDistribute(games || []);

  return (
    <SimpleGrid columns={columns} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {games &&
        Array.from({ length: currentColumns }, (_, index) => (
          <Box key={index}>
            {distributedCards.filter(
              (_, cardIndex) => cardIndex % currentColumns === index
            )}
          </Box>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
