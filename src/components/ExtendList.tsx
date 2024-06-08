import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";

interface Props {
  showAll: boolean;
  setShowAll: () => void;
}

const ExtendList = ({ showAll, setShowAll }: Props) => {
  const defaultColor = useColorModeValue("gray.400", "gray.500");
  const iconColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      as="button"
      cursor="pointer"
      onClick={() => setShowAll()}
      role="group"
      w="100%"
    >
      <HStack>
        <Box
          _groupHover={{ bg: hoverBg }}
          alignItems="center"
          aria-label="Add to friends"
          bg={defaultBg}
          borderRadius={6}
          boxSize="32px"
          display="flex"
          justifyContent="center"
        >
          {showAll ? (
            <ChevronUpIcon
              _groupHover={{ color: iconColor }}
              boxSize={7}
              color={defaultColor}
            />
          ) : (
            <ChevronDownIcon
              _groupHover={{ color: iconColor }}
              boxSize={7}
              color={defaultColor}
            />
          )}
        </Box>

        <Text color={defaultColor}>{showAll ? "Show less" : "Show all"}</Text>
      </HStack>
    </Box>
  );
};

export default ExtendList;
