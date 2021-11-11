// Components
import React from "react";

// Utility
import { useHistory } from "react-router-dom";

// Styles
//import {} from "./styles.js";

function Stop() {
  const history = useHistory();

  return (
    <div>
      <h1 onClick={() => history.goBack()}>Stop Game</h1>
    </div>
  );
}

export default Stop;
