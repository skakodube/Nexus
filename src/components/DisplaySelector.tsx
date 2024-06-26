import {
  Text,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import usePageData from "../store/pageDataStore";

const DisplaySelector = () => {
  const iconColor = useColorModeValue("gray.300", "gray.550");
  const iconColorActive = useColorModeValue("white", "gray.300");

  const isColumnDisplay = usePageData((s) => s.isColumnDisplay);
  const setIsColumnDisplay = usePageData((s) => s.setIsColumnDisplay);

  return (
    <HStack display={{ base: "none", lg: "flex" }}>
      <Text mr={2} color="gray.500" fontSize="sm" fontWeight="semi-bold">
        Display Options:
      </Text>

      <IconButton
        aria-label="Grid View"
        icon={
          <Icon
            _groupActive={{ color: iconColorActive }}
            as={CiGrid41}
            boxSize="40px"
            color={iconColor}
          />
        }
        borderRadius={8}
        boxSize="50px"
        cursor={isColumnDisplay ? "pointer" : "default"}
        disabled={!isColumnDisplay}
        isActive={!isColumnDisplay}
        onClick={() => setIsColumnDisplay(false)}
        role="group"
      />

      <IconButton
        aria-label="List View"
        icon={
          <Icon
            _groupActive={{ color: iconColorActive }}
            as={CiGrid2H}
            boxSize="40px"
            color={iconColor}
          />
        }
        borderRadius={8}
        boxSize="50px"
        cursor={!isColumnDisplay ? "pointer" : "default"}
        disabled={isColumnDisplay}
        isActive={isColumnDisplay}
        onClick={() => setIsColumnDisplay(true)}
        role="group"
      />
    </HStack>
  );
};

export default DisplaySelector;
