import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const InputSearch = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const bgColor = useColorModeValue("gray.100", "#3b3b3b");
  const bgColorActive = useColorModeValue("gray.200", "white");
  const color = useColorModeValue("gray.700", "white");
  const colorActive = useColorModeValue("black", "black");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup role="group">
        <InputLeftElement
          color={"gray.500"}
          display={{ base: "none", sm: "flex" }}
        >
          <Icon as={Search2Icon} boxSize="15px" />
        </InputLeftElement>

        <Input
          _groupHover={{ bg: bgColorActive, color: colorActive }}
          bg={bgColor}
          ref={ref}
          color={color}
          borderRadius={20}
          placeholder="Search games"
          _placeholder={{
            opacity: 0.7,
            color: "gray.500",
            _groupHover: { color: "black" },
          }}
          variant={"filled"}
        ></Input>

        <InputRightElement mr={9} display={{ base: "none", md: "flex" }}>
          <Box
            mr={1}
            as="kbd"
            color={"gray.500"}
            border="1px solid "
            borderColor="gray.500"
            borderRadius="sm"
            padding="1px 4px"
            fontSize="10px"
          >
            alt
          </Box>
          <Text fontSize="12px" as="kbd" color={"gray.500"}>
            +
          </Text>
          <Box
            ml={1}
            as="kbd"
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
      </InputGroup>
    </form>
  );
};

export default InputSearch;
