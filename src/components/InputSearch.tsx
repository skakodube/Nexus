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
import { useEffect, useRef } from "react";
import useGameQueryStore from "../store/gameQueryStore";
import { useLocation, useNavigate } from "react-router-dom";

const InputSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const bgColor = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.16)");
  const bgColorActive = useColorModeValue("gray.200", "white");
  const color = useColorModeValue("gray.700", "rgba(255, 255, 255, 0.6)");
  const colorActive = useColorModeValue("black", "black");

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get("query");

  useEffect(() => {
    if (queryParamValue !== null) {
      setSearchText(queryParamValue);
    }

    return () => {
      if (ref.current) {
        ref.current.value = "";
      }
    };
  }, [queryParamValue]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate(`/search?query=${ref.current.value}`);
        }
      }}
    >
      <InputGroup role="group" size={"md"}>
        <InputLeftElement
          color={"gray.500"}
          display={{ base: "none", sm: "flex" }}
        >
          <Icon as={Search2Icon} boxSize="15px" />
        </InputLeftElement>

        <Input
          fontSize={"14px"}
          _groupHover={{ bg: bgColorActive, color: colorActive }}
          bg={bgColor}
          ref={ref}
          color={color}
          borderRadius={30}
          placeholder="Search games"
          _placeholder={{
            color: color,
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
