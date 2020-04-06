import React from "react";

import Radium, { StyleRoot } from "radium";

const MediaQueriesInlineStyleRadium = () => {
  const style = {
    "@media (max-width: 900px)": {
      color: "red"
    },

    "@media (max-width: 500px)": {
      color: "blue"
    }
  };

  return (
    <StyleRoot>
      <div style={style}>
        <h1>Media Queries Inline Styles Using Radium</h1>
      </div>
    </StyleRoot>
  );
};

export default Radium(MediaQueriesInlineStyleRadium);
