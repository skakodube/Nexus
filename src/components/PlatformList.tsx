import { FaGamepad } from "react-icons/fa";
import { Box, List, ListItem, SkeletonText } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { platformIconMap } from "./PlatformIconList";
import ListOption from "./ListOption";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?: number;
}

const mainPlatforms = [
  "pc",
  "playstation4",
  "xbox-one",
  "nintendo-switch",
  "ios",
  "android",
];

const PlatformList = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, isLoading } = usePlatforms();

  //  Can't fetch data from API using slug/name of platform
  //  Filtering platform objects by matching their name
  const filterPlatforms = (platform: Platform): boolean =>
    mainPlatforms.some((mainPlatform) => platform.slug.includes(mainPlatform));

  const filteredPlatforms = data?.results.filter(filterPlatforms);

  const matchPlatformIcon = (platform: string) => {
    const matchingKey = Object.keys(platformIconMap).find((k) =>
      platform.includes(k)
    );
    return matchingKey ? platformIconMap[matchingKey] : FaGamepad;
  };

  return (
    <List>
      {isLoading && <SkeletonText />}
      {data?.results &&
        filteredPlatforms?.map((platform) => (
          <ListItem key={platform.id} paddingY="3px">
            <Box
              as="button"
              cursor="pointer"
              onClick={() => onSelectPlatform(platform.id)}
              role="group"
              w="100%"
            >
              <ListOption
                id={platform.id}
                name={platform.name}
                image={matchPlatformIcon(platform.slug)}
                selected={platform?.id == selectedPlatformId}
              ></ListOption>
            </Box>
          </ListItem>
        ))}
    </List>
  );
};

export default PlatformList;
