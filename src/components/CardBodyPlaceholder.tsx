import { Box, Image } from "@chakra-ui/react";
import CardAttributes from "./CardAttributes";
import Game from "../entities/Game";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
  wide: boolean;
}

const CardBodyPlaceholder = ({ game, wide }: Props) => {
  return (
    <Box
      visibility={"hidden"}
      display={"none"}
      _groupHover={{ display: "block" }}
    >
      <Image aspectRatio={16 / 9} objectFit={"cover"} src={noImage} />
      <CardAttributes game={game} wide={wide}></CardAttributes>
    </Box>
  );
};

export default CardBodyPlaceholder;
