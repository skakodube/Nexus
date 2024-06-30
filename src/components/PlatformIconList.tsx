import { HStack, Icon } from "@chakra-ui/react";
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
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

export interface PlatformIconMap {
  [key: string]: IconType;
}

export const platformIconMap: PlatformIconMap = {
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

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          boxSize="14px"
          as={platformIconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
