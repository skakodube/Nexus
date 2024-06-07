import { Box, Button, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import useTags, { Tag } from "../hooks/useTags";
import { useState } from "react";

interface Props {
  onSelectTag: (tag: Tag) => void;
}

const TagBar = ({ onSelectTag }: Props) => {
  const { data: tags } = useTags();

  return (
    <Wrap align={"center"}>
      <Text fontWeight="normal" color="gray.400">
        Related tags:
      </Text>
      {tags.map((tag) => (
        <WrapItem key={tag.id}>
          <Button
            onClick={() => onSelectTag(tag)}
            fontWeight="normal"
            fontSize="14px"
            color="gray.400"
            borderRadius={50}
          >
            {tag.name}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TagBar;
