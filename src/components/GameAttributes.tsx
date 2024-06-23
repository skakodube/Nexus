import { Box, Grid, GridItem, HStack, Link, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import Game from "../entities/Game";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import dateFormat from "../services/date-format";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid gridTemplateColumns={"1fr 1fr"} columnGap={6}>
      <DefinitionItem term={"Platforms"}>
        {game.platforms?.map((platform, index, array) => (
          <Box display={"inline"} key={platform.platform.id}>
            <ChakraLink
              as={ReactRouterLink}
              to={"/games/" + platform.platform.slug}
              fontSize={"md"}
            >
              {platform.platform.name}
            </ChakraLink>
            {index === array.length - 1 ? "" : ", "}
          </Box>
        ))}
      </DefinitionItem>
      <DefinitionItem term={"Metascore"}>
        <CriticScore score={game.metacritic}></CriticScore>{" "}
      </DefinitionItem>
      <DefinitionItem term={"Genre"}>
        {game.genres?.map((genre, index, array) => (
          <Box display={"inline"} key={genre.id}>
            <ChakraLink
              as={ReactRouterLink}
              to={"/games/" + genre.slug}
              fontSize={"md"}
            >
              {genre.name}
            </ChakraLink>
            {index === array.length - 1 ? "" : ", "}
          </Box>
        ))}
      </DefinitionItem>
      <DefinitionItem term={"Release date"}>
        <Text>{dateFormat(game.released)}</Text>
      </DefinitionItem>
      <DefinitionItem term={"Developers"}>
        {game.developers?.map((developer, index, array) => (
          <Box display={"inline"} key={developer.id}>
            <ChakraLink
              as={ReactRouterLink}
              to={"/developers/" + developer.slug}
              fontSize={"md"}
            >
              {developer.name}
            </ChakraLink>
            {index === array.length - 1 ? "" : ", "}
          </Box>
        ))}
      </DefinitionItem>
      <DefinitionItem term={"Publishers"}>
        {game.publishers?.map((publisher, index, array) => (
          <Box display={"inline"} key={publisher.id}>
            <ChakraLink
              as={ReactRouterLink}
              to={"/publishers/" + publisher.slug}
              fontSize={"md"}
            >
              {publisher.name}
            </ChakraLink>
            {index === array.length - 1 ? "" : ", "}
          </Box>
        ))}
      </DefinitionItem>
      <DefinitionItem term={"Age rating"}>
        <Text>{game.esrb_rating.name}</Text>
      </DefinitionItem>
      <GridItem colSpan={2}>
        <DefinitionItem term={"Tags"}>
          {game.tags?.map((tags, index, array) => (
            <Box display={"inline"} key={tags.id}>
              <ChakraLink
                as={ReactRouterLink}
                to={"/publishers/" + tags.slug}
                fontSize={"md"}
              >
                {tags.name}
              </ChakraLink>
              {index === array.length - 1 ? "" : ", "}
            </Box>
          ))}
        </DefinitionItem>
      </GridItem>
      <DefinitionItem term={"Website"}>
        <ChakraLink href={game.website}>{game.website}</ChakraLink>
      </DefinitionItem>
    </Grid>
  );
};

export default GameAttributes;
