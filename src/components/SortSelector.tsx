import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        fontSize={"sm"}
        fontWeight={"normal"}
        as={Button}
        rightIcon={<ChevronDownIcon color={"gray.500"} boxSize={6} mt={1} />}
      >
        Order by:{" "}
        <Box fontWeight={"bold"} as="span">
          Relevance
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
