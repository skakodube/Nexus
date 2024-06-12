import { Box, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { stripHtmlWithRegex } from "../services/html-remove";
import CollapsibleTextBox from "./CollapsibleTextBox";
import TagBar from "./TagBar";
import { Tag } from "../hooks/useTags";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
  onSelectTag: (tag: Tag) => void;
}

const GameHeading = ({ gameQuery, onSelectTag }: Props) => {
  const { data: platform } = usePlatform(gameQuery?.platformId);
  const { data: genre } = useGenre(gameQuery?.genreId);

  const anySelected = platform?.name || genre?.name;

  const heading = anySelected
    ? `${platform?.name || ""} ${genre?.name || ""} Games`.trim()
    : "All Games";

  const description = platform?.description || genre?.description || "";

  return (
    <Box mb={3}>
      <Heading as="h1" fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }} mb={2}>
        {heading}
      </Heading>
      {description && (
        <Box mb={4} display={{ base: "none", sm: "block" }}>
          <CollapsibleTextBox
            text={stripHtmlWithRegex(description)}
            charLimit={650}
          />
        </Box>
      )}
      {anySelected && (
        <Box mb={9}>
          <TagBar onSelectTag={onSelectTag} />
        </Box>
      )}
    </Box>
  );
};

export default GameHeading;
