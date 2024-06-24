import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image-placeholder.webp";
import Emoji from "./Emoji";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import dateFormat from "../services/date-format";
import { useEffect, useState } from "react";

interface Props {
  game: Game;
  wide: boolean;
}

const GameCard = ({ game, wide }: Props) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const buttonBg = useColorModeValue("gray.200", "#2d2d2d");
  const [hoveredBox, setHoveredBox] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setImageIndex(index);
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setImageIndex(0);
    setHoveredBox(0);
  };
  return (
    <Card overflow="hidden" borderRadius={10} bg={cardBg} role="group">
      <Box
        aspectRatio={16 / 9}
        position={"relative"}
        backgroundImage={getCroppedImageUrl(game.background_image)}
      >
        {imageIndex ? (
          game.short_screenshots.map((image, index) => (
            <Image
              aspectRatio={16 / 9}
              display={index == imageIndex ? "block" : "none"}
              key={index}
              objectFit={"cover"}
              src={getCroppedImageUrl(image.image) || noImage}
            ></Image>
          ))
        ) : (
          <Image
            aspectRatio={16 / 9}
            display={!imageIndex ? "block" : "none"}
            objectFit={"cover"}
            src={getCroppedImageUrl(game.background_image) || noImage}
          ></Image>
        )}
        <Flex
          visibility={"hidden"}
          _groupHover={{ visibility: "visible" }}
          position={"absolute"}
          bottom={0}
          height={"100%"}
          width={"90%"}
          left={"5%"}
          right={"5%"}
        >
          {game.short_screenshots.map((image, index) => (
            <Box
              flex={1}
              key={image.id}
              display={"flex"}
              alignItems={"flex-end"}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Box
                backgroundColor={hoveredBox === index ? "gray.200" : "gray.600"}
                flex={1}
                marginX={"4px"}
                marginY={3}
                height={"4px"}
                borderRadius={6}
              ></Box>
            </Box>
          ))}
        </Flex>
      </Box>

      <CardBody>
        <HStack mb={2} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          {!wide && <CriticScore score={game.metacritic}></CriticScore>}
        </HStack>

        <Heading fontSize="2xl">
          <Link to={`${game.slug}`}>{game.name + "  "}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>

        <Button
          marginY={2}
          fontSize="12px"
          borderRadius="4px"
          paddingX="10px"
          height="24px"
          bg={buttonBg}
        >
          <Icon as={FaPlus} mr={1} boxSize="12px" />
          {game.added.toLocaleString()}
        </Button>

        {wide && (
          <HStack spacing={6} paddingY={5}>
            <Box fontSize="sm" display="flex" alignItems="center">
              <Text mr={2} color={"gray.500"}>
                Metacritic:
              </Text>
              <CriticScore score={game.metacritic}></CriticScore>
            </Box>
            <Box fontSize="sm" display="flex">
              <Text color="gray.500">Release Date:</Text>
              <Text ml={2}>{dateFormat(game.released)}</Text>
            </Box>
          </HStack>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
