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
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data } = usePlatforms();
  const selectedPlatform = data.results.find(
    (platform) => platform.id == selectedPlatformId
  );

  const focusColor = useColorModeValue("white", "gray.800");
  const focusBg = useColorModeValue("gray.500", "white");
  const focusIcon = useColorModeValue("gray.300", "gray.500");

  return (
    <Menu>
      {selectedPlatform ? (
        <MenuButton
          as={Button}
          bg={focusBg}
          color={focusColor}
          fontSize="sm"
          fontWeight="normal"
          rightIcon={<ChevronDownIcon color={focusIcon} boxSize={6} mt={1} />}
        >
          {selectedPlatform.name}
        </MenuButton>
      ) : (
        <MenuButton
          as={Button}
          fontSize="sm"
          fontWeight="normal"
          rightIcon={<ChevronDownIcon color={"gray.500"} boxSize={6} mt={1} />}
        >
          Platforms
        </MenuButton>
      )}
      <MenuList>
        {data?.results &&
          data?.results.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform.id)}
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
