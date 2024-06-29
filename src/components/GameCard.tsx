import { Box, Image, Card, useColorModeValue } from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import Game from "../entities/Game";
import CardBody from "./CardBody";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
  isWide: boolean;
}

const GameCard = ({ game, isWide }: Props) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Card role="group" position={"relative"} borderRadius={isWide ? 20 : 10}>
      {/* Placeholder */}
      <Box>
        <Image
          visibility={"hidden"}
          display={"none"}
          _groupHover={{ display: "block" }}
          aspectRatio={16 / 9}
          objectFit={"cover"}
          src={noImage}
        />
        <CardBody game={game} isWide={isWide} isPlaceholder={true} />
      </Box>

      <Box
        borderRadius={isWide ? 20 : 10}
        bg={cardBg}
        overflow={"hidden"}
        padding={0}
        position={"relative"}
        transition="transform 0.3s ease-in-out"
        _groupHover={{
          position: "absolute",
          zIndex: 1,
          transform: isWide ? "" : "scale(1.02)",
        }}
      >
        <ImageCarousel game={game}></ImageCarousel>
        <CardBody game={game} isWide={isWide} />
      </Box>
    </Card>
  );
};

export default GameCard;
