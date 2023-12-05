import React from "react";
import statics from "../../theme/statics";

export default function Logocontainer() {
  return (
    <div
      style={{
        height: "66px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={statics.logo}
        style={{ width: statics.logoW, height: statics.logoH }}
      />
    </div>
  );
}
