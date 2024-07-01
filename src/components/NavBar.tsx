import {
  Box,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  Text,
  Center,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";
import { RiGamepadLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <HStack paddingY={{ base: 3, md: 6 }} alignItems={"center"}>
      <Link to={"/"}>
        <Center>
          <Icon
            as={RiGamepadLine}
            boxSize={{ base: "34px", md: "44px" }}
            cursor={"pointer"}
            mr={{ base: 2, md: 6 }}
          ></Icon>
        </Center>
      </Link>

      <Button
        _hover={{ bg: hoverBg, color: hoverColor }}
        alignItems={"center"}
        bg={defaultBg}
        borderRadius={{ base: 20, md: 6 }}
        color={defaultColor}
        display={"flex"}
        height={"26px"}
        ml={{ base: 2, md: 0 }}
        mr={{ base: 0, md: 5 }}
        onClick={() => handleButtonClick()}
        order={{ base: 3, md: 0 }}
        paddingX={{ base: 0, md: "20px" }}
        paddingY={{ base: "14px", md: "0" }}
      >
        <Icon boxSize={"20px"} as={FaGithub} />{" "}
        <Text ml={2} display={{ base: "none", md: "inline" }}>
          skakodube
        </Text>
      </Button>

      <InputSearch></InputSearch>
    </HStack>
  );
};

export default NavBar;
