import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      variant="outline"
      borderRadius="4px"
      paddingX={2}
      colorScheme={color}
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxH={"20px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
