import { Button, HStack, Text } from "@chakra-ui/react";
import useTags from "../hooks/useTags";

const TagBar = () => {
  const { data: tags } = useTags();

  return (
    <HStack>
      <Text fontWeight="normal" color="gray.400">
        Related tags:
      </Text>
      {tags.map((tag) => (
        <Button
          fontWeight="normal"
          fontSize="14px"
          color="gray.400"
          borderRadius={50}
        >
          {tag.name}
        </Button>
      ))}
    </HStack>
  );
};

export default TagBar;
