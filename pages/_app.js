import * as React from "react";
import "../styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component }) {
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}
