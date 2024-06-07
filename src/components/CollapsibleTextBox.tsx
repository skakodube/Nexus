import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  charLimit: number;
}

const CollapsibleTextBox = ({ text, charLimit }: Props) => {
  const color = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("gray.500", "white");

  const [isExpanded, setIsExpanded] = useState(false);

  const previewText =
    text.length > charLimit ? text.slice(0, charLimit) + "..." : text;

  return (
    <>
      {isExpanded ? text : previewText}{" "}
      {text.length > charLimit && !isExpanded && (
        <Button
          variant="link"
          p="1px 6px"
          color={color}
          bg={bg}
          borderRadius="3px"
          fontSize="12px"
          mt={2}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          size="sm"
        >
          {isExpanded ? "show less" : "read more"}
        </Button>
      )}
    </>
  );
};

export default CollapsibleTextBox;
