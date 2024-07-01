import { Box } from "@chakra-ui/react";
import usePageData from "../store/pageDataStore";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageBackgroundChanger = ({ children }: Props) => {
  const backgroundImage = usePageData((s) => s.backgroundImage);

  return (
    <Box
      backgroundImage={`linear-gradient(to bottom, rgba(21,21,21,0.7) 0%, rgba(21,21,21,1) 70%), url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition={"center"}
      backgroundRepeat="no-repeat"
      height={"100vh"}
    >
      {children}
    </Box>
  );
};

export default PageBackgroundChanger;
