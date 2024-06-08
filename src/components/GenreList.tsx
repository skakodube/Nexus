import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Box,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { useState } from "react";
import ExtendList from "./ExtendList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  const [showAll, setShowAll] = useState(false);

  const displayedGenres = showAll ? genres : genres.slice(0, 3);

  return (
    <List>
      {isLoading && <SkeletonText />}
      {displayedGenres.map((genre) => (
        <ListItem key={genre.id} paddingY="1px">
          <Box
            as="button"
            cursor="pointer"
            onClick={() => onSelectGenre(genre)}
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="nowrap"
              >
                {genre.name}
              </Text>
            </HStack>
          </Box>
        </ListItem>
      ))}

      {genres && (
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
