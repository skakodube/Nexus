import { Box, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatformById from "../hooks/usePlatformById";
import useGenreById from "../hooks/useGenreById";
import { stripHtmlWithRegex } from "../services/html-remove";
import CollapsibleTextBox from "./CollapsibleTextBox";
import TagBar from "./TagBar";
import { Tag } from "../hooks/useTags";

interface Props {
  gameQuery: GameQuery;
  onSelectTag: (tag: Tag) => void;
}

const GameHeading = ({ gameQuery, onSelectTag }: Props) => {
  const { data: platform } = usePlatformById(gameQuery, gameQuery.platform!);
  const { data: genre } = useGenreById(gameQuery, gameQuery.genre!);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  const description = platform?.description || genre?.description || "";

  return (
    <Box paddingY={10}>
      <Heading as={"h1"} fontSize={"7xl"} mb={2}>
        {heading}
      </Heading>
      {description && (
        <Box mb={4}>
          <CollapsibleTextBox
            text={stripHtmlWithRegex(description)}
            charLimit={650}
          />
        </Box>
      )}
      {description && (
        <Box>
          <TagBar onSelectTag={onSelectTag} />
        </Box>
      )}
    </Box>
  );
};

export default GameHeading;