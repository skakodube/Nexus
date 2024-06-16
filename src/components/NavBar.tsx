import {
  Box,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";
import { RiGamepadLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const defaultColor = useColorModeValue("white", "black");
  const hoverColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("gray.600", "gray.200");

  const handleButtonClick = () => {
    const url = "https://github.com/skakodube";
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <HStack paddingY={7}>
      <Icon
        as={RiGamepadLine}
        boxSize={"44px"}
        cursor={"pointer"}
        mr={{ base: 3, md: 6 }}
      ></Icon>

      <Button
        _hover={{ bg: hoverBg, color: hoverColor }}
        alignItems={"center"}
        bg={defaultBg}
        borderRadius={{ base: 100, md: 6 }}
        color={defaultColor}
        display={"flex"}
        height={"26px"}
        ml={{ base: 3, md: 0 }}
        mr={5}
        onClick={() => handleButtonClick()}
        order={{ base: 3, md: 0 }}
        paddingX={{ base: 0, md: "20px" }}
        paddingY={{ base: "16px", md: "0" }}
      >
        <Icon boxSize={"20px"} as={FaGithub} />{" "}
        <Text ml={2} display={{ base: "none", md: "inline" }}>
          skakodube
        </Text>
      </Button>

      <InputSearch></InputSearch>
      <Box display={{ base: "none", lg: "block" }}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
