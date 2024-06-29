import { HStack, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  term: string;
  isLast?: boolean;
}

const CardAttribute = ({ children, term, isLast = false }: Props) => {
  return (
    <HStack
      _groupHover={{ paddingY: 3 }}
      borderBottom={isLast ? "0" : "1px solid hsla(0, 0%, 100%, .07)"}
      justifyContent={"space-between"}
    >
      <Heading fontSize={"12px"} fontWeight={"600"} color="gray.600" as={"dl"}>
        {term + ":"}
      </Heading>
      {children}
    </HStack>
  );
};

export default CardAttribute;
