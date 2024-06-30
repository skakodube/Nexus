import { Box, List, ListItem } from "@chakra-ui/react";
import ListOption from "./ListOption";
import { FaFastForward, FaStar } from "react-icons/fa";
import { SiFireship } from "react-icons/si";
import { useParams } from "react-router-dom";

const NewReleasesList = () => {
  const { timeframe } = useParams();

  return (
    <List>
      <ListItem paddingY="4px">
        <Box as="button" cursor="pointer" role="group" w="100%">
          <ListOption
            name={"Last 30 days"}
            image={FaStar}
            selected={timeframe == "last-30-days"}
            link={`/discover/last-30-days`}
          ></ListOption>
        </Box>
      </ListItem>
      <ListItem paddingY="4px">
        <Box as="button" cursor="pointer" role="group" w="100%">
          <ListOption
            name={"This week"}
            image={SiFireship}
            selected={timeframe == "this-week"}
            link={`/discover/this-week`}
          ></ListOption>
        </Box>
      </ListItem>
      <ListItem paddingY="4px">
        <Box as="button" cursor="pointer" role="group" w="100%">
          <ListOption
            name={"Next week"}
            image={FaFastForward}
            selected={timeframe == "next-week"}
            link={`/discover/next-week`}
          ></ListOption>
        </Box>
      </ListItem>
    </List>
  );
};

export default NewReleasesList;
