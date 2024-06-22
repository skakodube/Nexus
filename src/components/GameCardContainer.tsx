import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      mb={6}
      borderRadius={10}
      maxW={"600px"}
      _hover={{
        transform: "scale(1.03)",
      }}
      transition="transform 0.2s ease-in-out"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
