import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image-placeholder.webp";
import Emoji from "./Emoji";
import { FaPlus } from "react-icons/fa";

interface Props {
  game: Game;
  wide: boolean;
}

const GameCard = ({ game, wide }: Props) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const buttonBg = useColorModeValue("gray.200", "#2d2d2d");

  const dateFormat = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card overflow="hidden" borderRadius={10} bg={cardBg}>
      <Image src={getCroppedImageUrl(game.background_image) || noImage}></Image>

      <CardBody>
        <HStack mb={2} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          {!wide && <CriticScore score={game.metacritic}></CriticScore>}
        </HStack>

        <Heading fontSize="2xl">
          {game.name + "  "}
          <Emoji rating={game.rating_top} />
        </Heading>

        <Button
          marginY={2}
          fontSize="12px"
          borderRadius="4px"
          paddingX="10px"
          height="24px"
          bg={buttonBg}
        >
          <Icon as={FaPlus} mr={1} boxSize="12px" />
          {game.added.toLocaleString()}
        </Button>

        {wide && (
          <HStack spacing={6} paddingY={5}>
            <Box fontSize="sm" display="flex" alignItems="center">
              <Text mr={2} color={"gray.500"}>
                Metacritic:
              </Text>
              <CriticScore score={game.metacritic}></CriticScore>
            </Box>
            <Box fontSize="sm" display="flex">
              <Text color="gray.500">Release Date:</Text>
              <Text ml={2}>{dateFormat(game.released)}</Text>
            </Box>
          </HStack>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
