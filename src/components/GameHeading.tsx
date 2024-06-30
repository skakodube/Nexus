import { Box, Heading, Text } from "@chakra-ui/react";
import CollapsibleTextBox from "./CollapsibleTextBox";
import TagBar from "./TagBar";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";
import { convert } from "html-to-text";
import { useLocation } from "react-router-dom";

// TODO: refactor useGenre/usePlatform for a undefigned id
// Hooks shoulb be called only if ids are present
const GameHeading = () => {
  const currentLocation = useLocation();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data: genre } = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: platform } = usePlatform(platformId);

  const anySelected = platform?.name || genre?.name;
  // if (currentLocation.pathname === "/")
  const heading =
    currentLocation.pathname === "/"
      ? "New and trending"
      : anySelected
      ? `${platform?.name || ""} ${genre?.name || ""} Games`.trim()
      : "All Games";

  const description = platform?.description || genre?.description || "";

  return (
    <Box mb={3}>
      <Heading
        as="h1"
        color={"white"}
        fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }}
      >
        {heading}
      </Heading>
      {currentLocation.pathname === "/" && (
        <Text m={0}>Based on player counts and release date</Text>
      )}
      {description && (
        <Box marginY={4} display={{ base: "none", sm: "block" }}>
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
