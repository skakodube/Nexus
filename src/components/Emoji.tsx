import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "22px" },
    4: { src: thumsUp, alt: "good", boxSize: "22px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "32px" },
  };
  return <Image display={"inline"} {...emojiMap[rating]}></Image>;
};

export default Emoji;
