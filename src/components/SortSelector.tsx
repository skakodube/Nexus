import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useGameQueryStore from "../store/gameQueryStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        fontSize={"sm"}
        fontWeight={"normal"}
        rightIcon={
          <ChevronDownIcon
            display={{ base: "none", sm: "block" }}
            color={"gray.500"}
            boxSize={6}
            mt={1}
          />
        }
      >
        Order by:{" "}
        <Box fontWeight={"bold"} as="span">
          {currentSortOrder?.label || "Relevance"}
        </Box>
      </MenuButton>
      <MenuList zIndex={2}>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => setSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
