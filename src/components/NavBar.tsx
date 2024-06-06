import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <InputSearch></InputSearch>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
