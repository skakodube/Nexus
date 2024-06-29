import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
  isVertical?: boolean;
  isLast?: boolean;
}

const DefinitionItem = ({
  term,
  children,
  isVertical = true,
  isLast = false,
}: Props) => {
  return isVertical ? (
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
  ) : (
    <HStack
      _groupHover={{ paddingY: 3 }}
      borderBottom={isLast ? "0" : "1px solid hsla(0, 0%, 100%, .07)"}
      justifyContent={"space-between"}
    >
      <Heading fontSize={"12px"} fontWeight={"600"} color="gray.600" as={"dl"}>
        {term + ":"}
      </Heading>
      {children}
    </HStack>
  );
};

export default DefinitionItem;
