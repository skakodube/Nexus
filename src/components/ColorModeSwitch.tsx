import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack paddingX={5}>
      <Switch colorScheme="green" size="md" onChange={toggleColorMode} />
      <Text color="gray.500">{colorMode === "light" ? "Light" : "Dark"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
