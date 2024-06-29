import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import { Link as ReactRouterLink } from "react-router-dom";
import Emoji from "./Emoji";
import { FaPlus } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import Genre from "../entities/Genre";
import dateFormat from "../services/date-format";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
  isWide: boolean;
  isPlaceholder?: boolean;
}

const DefinitionItems = ({ game, isWide, isPlaceholder = false }: Props) => {
  const buttonBg = useColorModeValue("gray.200", "hsla(0, 0%, 100%, .1)");
  return (
    <Box
      p={4}
      visibility={isPlaceholder ? "hidden" : "visible"}
      display={isPlaceholder ? "none" : "block"}
      _groupHover={{ display: "block" }}
    >
      <HStack mb={2} justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms?.map((p) => p.platform)}
        ></PlatformIconList>
        {!isWide && <CriticScore score={game.metacritic}></CriticScore>}
      </HStack>
      <Heading fontSize="2xl" mb={1} lineHeight={"18px"}>
        <ReactRouterLink to={`/games/${game.slug}`}>
          {game.name + "  "}
        </ReactRouterLink>
        <Emoji rating={game.rating_top} />
      </Heading>
      <Button
        marginRight={1}
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
      <Button
        marginRight={1}
        transition={"transform opacity 3s ease"}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        marginY={2}
        fontSize="12px"
        borderRadius="4px"
        paddingX={0}
        height="24px"
        bg={buttonBg}
      >
        <Icon as={GoGift} boxSize="16px" />
      </Button>
      <Button
        transition={"transform opacity 3s ease"}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        marginY={2}
        fontSize="12px"
        borderRadius="4px"
        paddingX={0}
        height="24px"
        bg={buttonBg}
      >
        <Icon as={BsThreeDots} boxSize="20px" />
      </Button>
      {/* Extended Attributes */}
      {!isPlaceholder && (
        <Box
          _groupHover={isWide ? {} : { height: "auto", opacity: 1 }}
          fontSize={"12px"}
          height={"0px"}
          opacity={0}
        >
          <DefinitionItem term="Release date" isVertical={false}>
            <Text>{dateFormat(game.released)}</Text>
          </DefinitionItem>
          <DefinitionItem term="Genres" isVertical={false}>
            <HStack gap={"5px"}>
              {game.genres
                ?.slice()
                ?.sort((a: Genre, b: Genre) => a.name.localeCompare(b.name))
                ?.map((genre, index, array) => (
                  <Box key={genre.id}>
                    <ChakraLink
                      as={ReactRouterLink}
                      to={"/games/" + genre.slug}
                    >
                      {genre.name}
                    </ChakraLink>
                    {index === array.length - 1 ? "" : ","}
                  </Box>
                ))}
            </HStack>
          </DefinitionItem>
          <DefinitionItem term="Age rating" isVertical={false} isLast={true}>
            <Text>{game.esrb_rating?.name || "Not rated"}</Text>
          </DefinitionItem>
        </Box>
      )}
      {/* Wide Style */}
      {isWide && (
        <HStack spacing={6} paddingY={5}>
          {game.metacritic && (
            <Box fontSize="sm" display="flex" alignItems="center">
              <Text mr={2} color={"gray.500"}>
                Metacritic:
              </Text>
              <CriticScore score={game.metacritic}></CriticScore>
            </Box>
          )}
          {game.genres && (
            <Box fontSize="sm" display="flex" alignItems="center">
              <Text mr={2} color={"gray.500"}>
                Genres:
              </Text>
              <HStack gap={"5px"}>
                {game.genres
                  ?.slice()
                  ?.sort((a: Genre, b: Genre) => a.name.localeCompare(b.name))
                  ?.map((genre, index, array) => (
                    <Box key={genre.id}>
                      <ChakraLink
                        as={ReactRouterLink}
                        to={"/games/" + genre.slug}
                      >
                        {genre.name}
                      </ChakraLink>
                      {index === array.length - 1 ? "" : ","}
                    </Box>
                  ))}
              </HStack>
            </Box>
          )}
          {game.released && (
            <Box fontSize="sm" display="flex">
              <Text color="gray.500">Release Date:</Text>
              <Text ml={2}>{dateFormat(game.released)}</Text>
            </Box>
          )}
        </HStack>
      )}
    </Box>
  );
};

export default DefinitionItems;
