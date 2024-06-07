import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { Tag } from "./hooks/useTags";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  tag: Tag | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("gray.600", "gray.400");

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      paddingX={10}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} w="210px" paddingRight={10}>
          <Box mb={5} onClick={() => setGameQuery({} as GameQuery)}>
            <Button
              variant="link"
              fontSize={"2xl"}
              fontWeight={"bold"}
              style={{ textDecoration: "none" }}
              color={color}
              _hover={{ color: hoverColor }}
            >
              All Games
            </Button>
          </Box>
          <Box mb={5}>
            <Heading mb={3} fontSize="2xl">
              Platforms
            </Heading>
            <PlatformList
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <Box>
            <Heading mb={3} fontSize="2xl">
              Genres
            </Heading>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading
          gameQuery={gameQuery}
          onSelectTag={(tag) => setGameQuery({ ...gameQuery, tag })}
        />
        <HStack mb={4}>
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
