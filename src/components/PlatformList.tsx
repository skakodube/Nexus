import { FaGamepad } from "react-icons/fa";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { platformIconMap } from "./PlatformIconList";
import {
  Box,
  HStack,
  List,
  ListItem,
  SkeletonText,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const mainPlatforms = [
  "pc",
  "playstation4",
  "xbox-one",
  "nintendo-switch",
  "ios",
  "android",
];

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const defaultColor = useColorModeValue("gray.500", "gray.300");
  const iconColor = useColorModeValue("white", "black");
  const defaultBg = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.500", "white");

  const { data: platforms, isLoading } = usePlatforms();

  //  Can't fetch data from API using slug/name of platform
  //  Filtering platform objects by matching their name
  const filterPlatforms = (platform: Platform): boolean =>
    mainPlatforms.some((mainPlatform) => platform.slug.includes(mainPlatform));

  const filteredPlatforms = platforms.filter(filterPlatforms);

  const matchPlatformIcon = (platform: string) => {
    const matchingKey = Object.keys(platformIconMap).find((k) =>
      platform.includes(k)
    );
    return matchingKey ? platformIconMap[matchingKey] : FaGamepad;
  };

  return (
    <List>
      {isLoading && <SkeletonText />}
      {filteredPlatforms.map((platform) => (
        <ListItem key={platform.id} paddingY="3px">
          <Box
            w="100%"
            onClick={() => onSelectPlatform(platform)}
            as="button"
            role="group"
            cursor="pointer"
          >
            <HStack>
              <Box
                _groupHover={{ bg: hoverBg }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize="32px"
                borderRadius={6}
                bg={platform.id === selectedPlatform?.id ? hoverBg : defaultBg}
              >
                <Icon
                  _groupHover={{ color: iconColor }}
                  color={
                    platform.id === selectedPlatform?.id
                      ? iconColor
                      : defaultColor
                  }
                  boxSize={5}
                  as={matchPlatformIcon(platform.slug)}
                />
              </Box>
              <Text
                fontWeight={
                  platform.id === selectedPlatform?.id ? "bold" : "normal"
                }
              >
                {platform.name}
              </Text>
            </HStack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default PlatformList;
