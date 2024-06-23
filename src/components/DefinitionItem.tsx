import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={3}>
      <Heading
        mb={2}
        fontSize={"sm"}
        fontWeight={"600"}
        color="gray.600"
        as={"dl"}
      >
        {term}
      </Heading>
      <Box as={"dd"}>{children}</Box>
    </Box>
  );
};

export default DefinitionItem;
