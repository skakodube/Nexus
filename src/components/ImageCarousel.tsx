import { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import noImage from "../assets/no-image-placeholder.webp";
import getCroppedImageUrl from "../services/image-url";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const ImageCarousel = ({ game }: Props) => {
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
    <Box position={"relative"}>
      <Image
        aspectRatio={16 / 9}
        objectFit={"cover"}
        src={getCroppedImageUrl(game.background_image) || noImage}
      />
      {imageIndex > 0 &&
        game.short_screenshots?.map((image, index) => (
          <Image
            aspectRatio={16 / 9}
            display={index === imageIndex ? "block" : "none"}
            key={index}
            objectFit={"cover"}
            position={"absolute"}
            src={getCroppedImageUrl(image.image) || noImage}
            top={0}
            zIndex={1}
          />
        ))}

      {/* Container for hovers */}
      <Flex
        _groupHover={{ visibility: "visible" }}
        height={"100%"}
        bottom={0}
        left={"5%"}
        right={"5%"}
        position={"absolute"}
        visibility={"hidden"}
        width={"90%"}
        zIndex={2}
      >
        {game.short_screenshots?.map((image, index) => (
          // Hover areas / Columns
          <Box
            flex={1}
            key={image.id}
            display={"flex"}
            alignItems={"flex-end"}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            {/* Visuals */}
            <Box
              backgroundColor={hoveredBox === index ? "gray.200" : "gray.600"}
              borderRadius={6}
              flex={1}
              height={"4px"}
              marginX={"4px"}
              marginY={3}
              transition="background-color 0.3s ease"
            ></Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ImageCarousel;
