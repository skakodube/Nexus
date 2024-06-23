import { useState } from "react";
import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: string;
  charLimit: number;
}

const CollapsibleTextBox = ({ children, charLimit }: Props) => {
  const defaultColor = useColorModeValue("white", "gray.800");
  const defaultBg = useColorModeValue("gray.500", "white");

  const [isExpanded, setIsExpanded] = useState(false);

  const previewText =
    children.length > charLimit
      ? children.slice(0, charLimit) + "..."
      : children;

  return (
    <Box>
      {isExpanded ? children : previewText}{" "}
      {children.length > charLimit && !isExpanded && (
        <Button
          bg={defaultBg}
          borderRadius="3px"
          color={defaultColor}
          fontSize="12px"
          mt={2}
          onClick={() => setIsExpanded(!isExpanded)}
          p=".5px 6px"
          size="sm"
          variant="link"
        >
          {isExpanded ? "show less" : "read more"}
        </Button>
      )}
    </Box>
  );
};

export default CollapsibleTextBox;
