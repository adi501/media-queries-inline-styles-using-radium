import React from "react";
import "./styles.css";

import MediaQueriesInlineStyleRadium from "./Components/MediaQueriesInlineStyleRadium";

import { StyleRoot } from "radium";

export default function App() {
  return (
    <div className="App">
      <StyleRoot>
        <MediaQueriesInlineStyleRadium />
      </StyleRoot>
    </div>
  );
}
