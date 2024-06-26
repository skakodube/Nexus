import { FaGamepad } from "react-icons/fa";
import { Box, List, ListItem, SkeletonText } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { platformIconMap } from "./PlatformIconList";
import ListOption from "./ListOption";
import useGameQueryStore from "../store/gameQueryStore";
import Platform from "../entities/Platform";

const mainPlatforms = [
  "pc",
  "playstation4",
  "xbox-one",
  "nintendo-switch",
  "ios",
  "android",
];

const PlatformList = () => {
  const { data, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

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
          <ListItem key={platform.id} paddingY="4px">
            <Box
              as="button"
              cursor="pointer"
              onClick={() => setPlatformId(platform.id)}
              role="group"
              w="100%"
            >
              <ListOption
                name={platform.name}
                image={matchPlatformIcon(platform.slug)}
                selected={platform?.id == selectedPlatformId}
                link={`/games`}
              ></ListOption>
            </Box>
          </ListItem>
        ))}
    </List>
  );
};

export default PlatformList;
