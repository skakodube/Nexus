import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge borderRadius="4px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
