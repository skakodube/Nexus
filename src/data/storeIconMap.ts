import { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaApple,
  FaGooglePlay,
  FaItchIo,
  FaPlaystation,
  FaSteam,
  FaXbox,
} from "react-icons/fa";
import { SiEpicgames, SiGogdotcom } from "react-icons/si";

export interface StoreIconMap {
  [key: string]: IconType;
}

const storeIconMap: StoreIconMap = {
  gog: SiGogdotcom,
  steam: FaSteam,
  "playstation-store": FaPlaystation,
  "xbox-store": FaXbox,
  "apple-appstore": FaApple,
  nintendo: BsNintendoSwitch,
  xbox360: FaXbox,
  "google-play": FaGooglePlay,
  itch: FaItchIo,
  "epic-games": SiEpicgames,
};

export default storeIconMap;
