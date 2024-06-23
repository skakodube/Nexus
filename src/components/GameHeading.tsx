import { Box, Heading } from "@chakra-ui/react";
import CollapsibleTextBox from "./CollapsibleTextBox";
import TagBar from "./TagBar";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import { convert } from "html-to-text";

// TODO: refactor useGenre/usePlatform for a undefigned id
// Hooks shoulb be called only if ids are present
const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data: genre } = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: platform } = usePlatform(platformId);

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
          <CollapsibleTextBox charLimit={650}>
            {convert(description)}
          </CollapsibleTextBox>
        </Box>
      )}
      {anySelected && (
        <Box mb={9}>
          <TagBar />
        </Box>
      )}
    </Box>
  );
};

export default GameHeading;
