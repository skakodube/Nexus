import {
  Grid,
  GridItem,
  Show,
  Button,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformList from "../components/PlatformList";
import useGameQueryStore from "../store";

const Layout = () => {
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("gray.600", "gray.400");

  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

  return (
    <Grid
      paddingX={10}
      templateAreas={{
        base: `"nav" 
              "main"`,

        lg: `"nav nav" 
            "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem my={10} area={"aside"}>
          <Link to={"games/"}>
            <Box mb={5} onClick={() => resetGameQuery()}>
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
          </Link>
          <Box mb={5}>
            <Heading mb={3} fontSize="2xl">
              Platforms
            </Heading>
            <PlatformList />
          </Box>
          <Box>
            <Heading mb={3} fontSize="2xl">
              Genres
            </Heading>
            <GenreList />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
