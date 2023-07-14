import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Navbar from "../components/Navbar";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">SEA Cinema</h1>

          {/* <Navbar /> */}

          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
