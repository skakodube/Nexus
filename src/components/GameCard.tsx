import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"} textAlign={"center"}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
