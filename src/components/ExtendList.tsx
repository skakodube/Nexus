import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";

interface Props {
  showAll: boolean;
  setShowAll: () => void;
}

const ExtendList = ({ showAll, setShowAll }: Props) => {
  const defaultColor = useColorModeValue("gray.400", "gray.500");
  const iconColor = useColorModeValue("white", "black");
  const defaultBg = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      mt={1}
      onClick={() => setShowAll()}
      as="button"
      role="group"
      cursor="pointer"
    >
      <HStack>
        <Box
          _groupHover={{ bg: hoverBg }}
          borderRadius={8}
          boxSize="32px"
          aria-label="Add to friends"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={defaultBg}
        >
          {showAll ? (
            <ChevronUpIcon
              _groupHover={{ color: iconColor }}
              color={defaultColor}
              boxSize={6}
            />
          ) : (
            <ChevronDownIcon
              _groupHover={{ color: iconColor }}
              color={defaultColor}
              boxSize={6}
            />
          )}
        </Box>

        <Text color={defaultColor}>{showAll ? "Show less" : "Show all"}</Text>
      </HStack>
    </Box>
  );
};

export default ExtendList;
