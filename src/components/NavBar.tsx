import { Box, HStack, Icon, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";
import { RiGamepadLine } from "react-icons/ri";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingY={7}>
      <Icon
        cursor={"pointer"}
        boxSize={"38px"}
        as={RiGamepadLine}
        mr={6}
      ></Icon>
      <InputSearch onSearch={onSearch}></InputSearch>
      <Box display={{ base: "none", lg: "block" }}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
