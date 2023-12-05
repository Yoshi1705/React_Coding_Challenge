import React from "react";
import colors from "../../theme/colors";
import { Link } from "react-router-dom";

export default function Navbtn({ children, isSelected ,page }) {
  return (
    <Link to={page}>
      <div
        style={{
          height: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {isSelected == true && (
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "100%",
              backgroundColor: colors.primary,
            }}
          ></div>
        )}
        <div
          style={{
            width: 24,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
