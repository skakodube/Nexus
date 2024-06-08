import {
  Box,
  Center,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  columnDisplay: boolean;
}

const GameGrid = ({ gameQuery, columnDisplay }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);

  if (error) return <Text>{error}</Text>;

  const columns = columnDisplay
    ? { base: 1 }
    : { base: 1, md: 2, lg: 3, xl: 4 };
  const currentColumns = useBreakpointValue(columns) ?? 1;

  const cardDistribute = (games: Game[]): JSX.Element[] => {
    const distributedCards: JSX.Element[] = [];

    games.forEach((game) => {
      distributedCards.push(
        <Box key={game.id} mb={6}>
          <GameCardContainer key={game.id}>
            <GameCard game={game} wide={columnDisplay} />
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
        Array.from({ length: currentColumns }, (_, index) =>
          columnDisplay ? (
            <Center>
              <Box key={index}>
                {distributedCards.filter(
                  (_, cardIndex) => cardIndex % currentColumns === index
                )}
              </Box>
            </Center>
          ) : (
            <Box key={index}>
              {distributedCards.filter(
                (_, cardIndex) => cardIndex % currentColumns === index
              )}
            </Box>
          )
        )}
    </SimpleGrid>
  );
};

export default GameGrid;
