import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      alignItems="center"
      borderRadius="4px"
      colorScheme={color}
      display="flex"
      justifyContent="center"
      maxH="20px"
      maxW="30px"
      paddingX={2}
      variant="outline"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
