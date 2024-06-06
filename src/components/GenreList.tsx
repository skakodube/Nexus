import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Button,
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
        <ListItem key={genre.id} paddingY="4px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={genre.image_background}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}

      <ListItem>
        <ExtendList showAll={showAll} setShowAll={() => setShowAll(!showAll)} />
      </ListItem>
    </List>
  );
};

export default GenreList;
