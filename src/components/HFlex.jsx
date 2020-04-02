import React from "react";

function HFlex(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {props.children}
    </div>
  );
}

export default HFlex;
