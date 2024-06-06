import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms } = usePlatforms();
  const focusColor = useColorModeValue("white", "gray.800");
  const focusBg = useColorModeValue("gray.500", "white");
  const focusIcon = useColorModeValue("gray.300", "gray.500");
  return (
    <Menu>
      {selectedPlatform ? (
        <MenuButton
          bg={focusBg}
          color={focusColor}
          fontSize={"sm"}
          fontWeight={"normal"}
          as={Button}
          rightIcon={<ChevronDownIcon color={focusIcon} boxSize={6} mt={1} />}
        >
          {selectedPlatform.name}
        </MenuButton>
      ) : (
        <MenuButton
          fontSize={"sm"}
          fontWeight={"normal"}
          as={Button}
          rightIcon={<ChevronDownIcon color={"gray.500"} boxSize={6} mt={1} />}
        >
          {"Platforms"}
        </MenuButton>
      )}
      <MenuList>
        {platforms &&
          platforms.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
