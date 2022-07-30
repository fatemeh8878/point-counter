import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const theme = createTheme({
  direction: "rtl",
  fontFamily: "iransans !important",
  // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
