import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import PageBackgroundChanger from "./components/PageBackgroundChanger.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <PageBackgroundChanger>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </PageBackgroundChanger>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
