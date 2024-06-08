import { Button, Center, Text, HStack, Icon } from "@chakra-ui/react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

interface Props {
  columnDisplay: boolean;
  setColumnDisplay: (isColumn: boolean) => void;
}

const DisplaySelector = ({ columnDisplay, setColumnDisplay }: Props) => {
  return (
    <HStack>
      <Text mr={2} color={"gray.500"} fontSize={"sm"} fontWeight={"semi-bold"}>
        Display Options:
      </Text>

      <Button
        borderRadius={8}
        boxSize={"50px"}
        isActive={!columnDisplay}
        cursor={!columnDisplay ? "default" : "pointer"}
        onClick={() => setColumnDisplay(false)}
      >
        <Center h="100%">
          <Icon as={CiGrid41} boxSize="40px" color={"gray.500"} />
        </Center>{" "}
      </Button>
      <Button
        onClick={() => setColumnDisplay(true)}
        isActive={columnDisplay}
        borderRadius={8}
        cursor={columnDisplay ? "default" : "pointer"}
        boxSize={"50px"}
      >
        <Center h="100%">
          <Icon as={CiGrid2H} boxSize="40px" color={"gray.500"} />
        </Center>{" "}
      </Button>
    </HStack>
  );
};

export default DisplaySelector;
