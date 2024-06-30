import { Button, Text, Wrap, WrapItem } from "@chakra-ui/react";
import useTags from "../hooks/useTags";
import useGameQueryStore from "../store/gameQueryStore";

const TagBar = () => {
  const setTagId = useGameQueryStore((s) => s.setTagId);
  const { data } = useTags();

  return (
    <Wrap align={"center"} display={{ base: "none", md: "block" }}>
      <Text fontWeight="normal" color="gray.400">
        Related tags:
      </Text>
      {data?.results.map((tag) => (
        <WrapItem key={tag.id}>
          <Button
            borderRadius={50}
            color="gray.500"
            fontSize="14px"
            fontWeight="normal"
            onClick={() => setTagId(tag.id)}
          >
            {tag.name}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TagBar;
