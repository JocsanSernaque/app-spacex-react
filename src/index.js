import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
