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
import { Tag } from "./hooks/useTags";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import DisplaySelector from "./components/DisplaySelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  tag: Tag | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("gray.600", "gray.400");
  const [columnDisplay, setColumnDisplay] = useState(false);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      paddingX={10}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem my={10} area={"aside"}>
          <Box mb={5} onClick={() => setGameQuery({} as GameQuery)}>
            <Button
              variant="link"
              fontSize={"2xl"}
              fontWeight={"bold"}
              style={{ textDecoration: "none" }}
              color={color}
              _hover={{ color: hoverColor }}
            >
              Home
            </Button>
          </Box>
          <Box mb={5}>
            <Heading mb={3} fontSize="2xl">
              Platforms
            </Heading>
            <PlatformList
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
              }
              selectedPlatformId={gameQuery.platformId}
            />
          </Box>
          <Box>
            <Heading mb={3} fontSize="2xl">
              Genres
            </Heading>
            <GenreList
              onSelectGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genreId })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading
          gameQuery={gameQuery}
          onSelectTag={(tag) => setGameQuery({ ...gameQuery, tag })}
        />
        <HStack mb={4} justifyContent="space-between" w={"100%"}>
          <HStack spacing={2}>
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
              }
            />
          </HStack>
          <DisplaySelector
            columnDisplay={columnDisplay}
            setColumnDisplay={(columnDisplay) =>
              setColumnDisplay(columnDisplay)
            }
          />
        </HStack>
        <GameGrid columnDisplay={columnDisplay} gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
