import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <InputSearch onSearch={onSearch}></InputSearch>
      <Box display={{ base: "none", lg: "block" }}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
