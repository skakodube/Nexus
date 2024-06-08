import { useState } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

interface Props {
  text: string;
  charLimit: number;
}

const CollapsibleTextBox = ({ text, charLimit }: Props) => {
  const defaultColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.500", "white");

  const [isExpanded, setIsExpanded] = useState(false);

  const previewText =
    text.length > charLimit ? text.slice(0, charLimit) + "..." : text;

  return (
    <>
      {isExpanded ? text : previewText}{" "}
      {text.length > charLimit && !isExpanded && (
        <Button
          bg={defaultBg}
          borderRadius="3px"
          color={defaultColor}
          fontSize="12px"
          mt={2}
          onClick={() => setIsExpanded(!isExpanded)}
          p="1px 6px"
          size="sm"
          variant="link"
        >
          {isExpanded ? "show less" : "read more"}
        </Button>
      )}
    </>
  );
};

export default CollapsibleTextBox;
