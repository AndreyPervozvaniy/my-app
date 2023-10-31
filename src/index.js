import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";

const { Button } = chakraTheme.components;
const { Tabs } = chakraTheme.components;
const { Menu } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Tabs,
    Menu,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
