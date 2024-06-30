import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  LightMode,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Link as ReactRouterLink,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundImage="url('https://images.hdqwalls.com/wallpapers/pubg-abandoned-city-3r.jpg')" // Replace with your image URL
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      filter="grayscale(90%)"
    >
      <Grid
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-r, gray.800, rgba(21, 21, 21, 0.9), rgba(21, 21, 21, 0.5))"
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        paddingX={{ base: "none", lg: 20 }}
      >
        <Center height={"100vh"}>
          <VStack alignItems={"left"} mb={20}>
            <Heading fontSize={{ base: 150, lg: 190 }} fontWeight={"500"}>
              {404}
            </Heading>
            <Text whiteSpace="pre-line" fontSize={20} fontWeight={"600"}>
              {isRouteErrorResponse(error)
                ? `Whoops! \nWe couldn't find that page.`
                : "An unexpected error occurred."}
            </Text>
            <LightMode>
              <Button
                mt={20}
                fontWeight={"normal"}
                fontSize={"lg"}
                colorScheme="gray"
                paddingY={6}
                as={ReactRouterLink}
                to={"/"}
              >
                Main Page
              </Button>
            </LightMode>
          </VStack>
        </Center>
      </Grid>
    </Box>
  );
};

export default ErrorPage;
