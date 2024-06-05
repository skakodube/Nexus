import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();

  return (
    <List>
      {isLoading && <SkeletonText />}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="4px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={genre.image_background}
            ></Image>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
