// Components
import React from "react";

// Styles
import { wrapper } from "./styles.js";

function Button({ color, active, pressed, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ ...wrapper, backgroundColor: active ? color : "grey" }}
    />
  );
}

export default Button;
