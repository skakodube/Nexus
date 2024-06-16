import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Box,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { useState } from "react";
import ExtendList from "./ExtendList";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const [showAll, setShowAll] = useState(false);

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const displayedGenres = showAll ? data.results : data.results.slice(0, 3);

  return (
    <List>
      {isLoading && <SkeletonText />}
      {displayedGenres.map((genre) => (
        <ListItem key={genre.id} paddingY="1px">
          <Box
            as="button"
            cursor="pointer"
            onClick={() => setGenreId(genre.id)}
            role="group"
            w="100%"
          >
            <HStack>
              <Image
                borderRadius={6}
                boxSize="32px"
                objectFit="cover"
                src={genre.image_background}
              ></Image>
              <Text
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="nowrap"
              >
                {genre.name}
              </Text>
            </HStack>
          </Box>
        </ListItem>
      ))}

      {data.results && (
        <ListItem paddingY="1px">
          <ExtendList
            showAll={showAll}
            setShowAll={() => setShowAll(!showAll)}
          />
        </ListItem>
      )}
    </List>
  );
};

export default GenreList;
