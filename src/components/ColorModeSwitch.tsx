import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack paddingX={"20px"}>
      <Switch colorScheme="green" onChange={toggleColorMode} />
      <Text>{colorMode === "light" ? "Light" : "Dark"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
