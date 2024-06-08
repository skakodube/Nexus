import { Box, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  id: number;
  image: React.ElementType;
  name: string;
  selected: boolean;
}

const ListOption = ({ image, name, selected }: Props) => {
  const defaultColor = useColorModeValue("gray.700", "white");
  const activeColor = useColorModeValue("white", "black");
  const defaultBg = useColorModeValue("gray.200", "gray.700");
  const activeBg = useColorModeValue("black", "white");
  return (
    <HStack>
      <Box
        _groupHover={{ bg: activeBg }}
        alignItems="center"
        bg={selected ? activeBg : defaultBg}
        borderRadius={6}
        boxSize="32px"
        display="flex"
        justifyContent="center"
      >
        <Icon
          _groupHover={{ color: activeColor }}
          as={image}
          boxSize={5}
          color={selected ? activeColor : defaultColor}
        />
      </Box>
      <Text fontWeight={selected ? "bold" : "normal"}>{name}</Text>
    </HStack>
  );
};

export default ListOption;
