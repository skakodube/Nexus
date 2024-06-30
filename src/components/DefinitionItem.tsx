import { Box, HStack, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
  isVertical?: boolean;
}

const DefinitionItem = ({ term, children, isVertical = true }: Props) => {
  return isVertical ? (
    <Box marginY={3}>
      <Heading
        mb={2}
        fontSize={"sm"}
        fontWeight={"600"}
        color="hsla(0,0%,100%,.2)"
        as={"dl"}
      >
        {term}
      </Heading>
      <Box as={"dd"}>{children}</Box>
    </Box>
  ) : (
    <HStack _groupHover={{ paddingY: 3 }} justifyContent={"space-between"}>
      <Heading fontSize={"12px"} fontWeight={"600"} color="gray.500" as={"dl"}>
        {term + ":"}
      </Heading>
      {children}
    </HStack>
  );
};

export default DefinitionItem;
