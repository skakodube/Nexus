import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const InputSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement
        color={"gray.500"}
        display={{ base: "none", sm: "flex" }}
      >
        <Icon as={Search2Icon} boxSize="15px"></Icon>
      </InputLeftElement>
      <InputRightElement mr={9} display={{ base: "none", md: "flex" }}>
        <Box
          mr={1}
          fontFamily="monospace"
          color={"gray.500"}
          border="1px solid "
          borderColor="gray.500"
          borderRadius="sm"
          padding="1px 4px"
          fontSize="10px"
        >
          alt
        </Box>
        <Text fontSize="12px" fontFamily="monospace" color={"gray.500"}>
          +
        </Text>
        <Box
          ml={1}
          fontFamily="monospace"
          color={"gray.500"}
          border="1px solid "
          borderColor="gray.500"
          borderRadius="sm"
          padding="1px 4px"
          fontSize="10px"
        >
          enter
        </Box>
      </InputRightElement>
      <Input
        borderRadius={20}
        placeholder="Search games"
        _placeholder={{ opacity: 0.7, color: "gray.500" }}
        variant={"filled"}
      ></Input>
    </InputGroup>
  );
};

export default InputSearch;
