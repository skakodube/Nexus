import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box mb={6} maxW={"600px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
