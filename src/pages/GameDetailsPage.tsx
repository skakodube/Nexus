import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Center,
  Text,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Box,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import CollapsibleTextBox from "../components/CollapsibleTextBox";
import GameAttributes from "../components/GameAttributes";
import dateFormat from "../services/date-format";

const GameDetailsPage = () => {
  const defaultColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.500", "white");

  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const requirements =
    (game.platforms[0].requirements.minimum ?? "") +
    "\n" +
    (game.platforms[0].requirements.recommended ?? "");

  return (
    <Center>
      <Grid gridTemplateColumns={"2fr 1fr"} maxW={"1024px"}>
        <GridItem>
          <HStack>
            <Badge
              bg={defaultBg}
              borderRadius="4px"
              color={defaultColor}
              fontWeight={400}
              fontSize={"12px"}
              letterSpacing={"1.5px"}
              padding={"1px 6px"}
            >
              {dateFormat(game.released)}
            </Badge>
            <Text
              fontSize={"13px"}
              letterSpacing={"1.5px"}
              textTransform={"uppercase"}
            >
              {"average play time: " + game.playtime + " hours"}
            </Text>
          </HStack>
          <Heading marginY={2} fontSize={"72px"}>
            {game.name}
          </Heading>
          <Box marginY={5}>
            <Heading marginY={2} fontSize={"2xl"}>
              About
            </Heading>
            <CollapsibleTextBox charLimit={650}>
              {game.description_raw}
            </CollapsibleTextBox>
          </Box>
          <GameAttributes game={game}></GameAttributes>
          <Box marginY={5}>
            <Heading marginY={2} fontSize={"2xl"}>
              System requirements for PC
            </Heading>
            <Text whiteSpace={"pre-line"} fontSize={"sm"}>
              {requirements}
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Text>Shit</Text>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default GameDetailsPage;
