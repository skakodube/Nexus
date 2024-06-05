import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  SiXbox,
  SiPlaystation,
  SiWindows10,
  SiNintendoswitch,
  SiApple,
  SiLinux,
} from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { BsAndroid2, BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: SiWindows10,
    xbox: SiXbox,
    playstation: SiPlaystation,
    nintendo: SiNintendoswitch,
    mac: SiApple,
    linux: SiLinux,
    ios: IoPhonePortraitOutline,
    android: BsAndroid2,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          boxSize="14px"
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
