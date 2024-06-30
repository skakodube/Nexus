import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Center,
  Text,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Box,
  HStack,
  Badge,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import CollapsibleTextBox from "../components/CollapsibleTextBox";
import GameAttributes from "../components/GameAttributes";
import dateFormat from "../services/date-format";
import GameMedia from "../components/GameMedia";
import { platformIconMap } from "../components/PlatformIconList";
import { Link as ReactRouterLink } from "react-router-dom";
import usePageData from "../store/pageDataStore";
import { useEffect } from "react";
import storeIconMap from "../data/storeIconMap";

const GameDetailsPage = () => {
  const defaultColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.500", "white");

  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const setBackgroundImage = usePageData((s) => s.setBackgroundImage);
  const resetBackgroundImage = usePageData((s) => s.resetBackgroundImage);

  useEffect(() => {
    if (game) {
      setBackgroundImage(game.background_image);
    }
    return () => {
      resetBackgroundImage();
    };
  }, [setBackgroundImage, resetBackgroundImage, game]);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const requirements =
    (game.platforms[0].requirements.minimum ?? "") +
    "\n" +
    "\n" +
    (game.platforms[0].requirements.recommended ?? "");

  return (
    <Center>
      <Grid
        gridTemplateColumns={"55% 40%"}
        maxW={"960px"}
        rowGap={8}
        columnGap={12}
      >
        <GridItem colSpan={2}>
          <Breadcrumb
            spacing={1}
            separator="/"
            textTransform={"uppercase"}
            fontSize={"10px"}
            color={"gray.500"}
            letterSpacing={"1.5px"}
            fontWeight={"500"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                textDecor={"none"}
                as={ReactRouterLink}
                _hover={{ color: "white" }}
                to={"/"}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                textDecor={"none"}
                as={ReactRouterLink}
                to={"/games"}
                _hover={{ color: "white" }}
              >
                Games
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{game.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </GridItem>
        <GridItem>
          <HStack spacing={4} ml={1}>
            {game.released && (
              <Badge
                bg={defaultBg}
                borderRadius="4px"
                color={defaultColor}
                fontWeight={400}
                fontSize={"12px"}
                letterSpacing={"1.5px"}
                padding={"1px 6px"}
              >
                {dateFormat(game.released)}
              </Badge>
            )}
            {game.platforms && (
              <HStack justifyContent={"space-between"}>
                {game.parent_platforms.map((platform) => (
                  <Icon
                    key={platform.platform.id}
                    boxSize={"18px"}
                    as={platformIconMap[platform.platform.slug]}
                  ></Icon>
                ))}
              </HStack>
            )}
            {game.playtime > 0 && (
              <Text
                fontSize={"13px"}
                letterSpacing={"1.5px"}
                textTransform={"uppercase"}
              >
                {"average play time: " + game.playtime + " hours"}
              </Text>
            )}
          </HStack>
          <Heading marginY={2} fontSize={"72px"}>
            {game.name}
          </Heading>
          <Box marginY={5}>
            <Heading marginY={2} fontSize={"2xl"}>
              About
            </Heading>
            <CollapsibleTextBox charLimit={650}>
              {game.description_raw}
            </CollapsibleTextBox>
          </Box>
          <GameAttributes game={game}></GameAttributes>
          {requirements && requirements.trim().length > 0 && (
            <Box marginY={5}>
              <Heading marginY={2} fontSize={"2xl"}>
                System requirements for PC
              </Heading>
              <Text whiteSpace={"pre-line"} fontSize={"sm"}>
                {requirements}
              </Text>
            </Box>
          )}
        </GridItem>
        <GridItem>
          <GameMedia gameId={game.id} />
          {game.updated && (
            <Text
              textAlign={"center"}
              mt={3}
              color={"gray.500"}
              fontSize={"sm"}
            >
              {"Last Modified: " + dateFormat(game.updated)}
            </Text>
          )}
          <Heading mt={10} fontWeight={"500"} color="gray.500" fontSize={"md"}>
            Where to buy
          </Heading>
          <SimpleGrid gridTemplateColumns={"1fr 1fr"} mt={5} gap={4}>
            {game.stores.map((store) => (
              <GridItem>
                <Button
                  as={ReactRouterLink}
                  to={"https://" + store.store.domain}
                  w={"100%"}
                  variant={"solid"}
                  rightIcon={
                    <Icon
                      boxSize={6}
                      as={storeIconMap[store.store.slug]}
                    ></Icon>
                  }
                  color={"gray.500"}
                >
                  {store.store.name}
                </Button>
              </GridItem>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default GameDetailsPage;
