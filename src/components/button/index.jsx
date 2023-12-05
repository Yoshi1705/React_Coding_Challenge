import React from "react";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

function Button({ label, backgroundColor, width, height, borderRadius, color, border, cursor,onClick , customStyle}) {
  return (
    <>
      <button
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderRadius: borderRadius,
          textDecoration: "none",
          color: color,
          border: border,
          cursor: cursor,
          fontFamily: fonts.primaryFont,
          fontSize: fonts.smallSize,
          fontWeight: fonts.regularWeight,
          ...customStyle
        }}
        onClick={()=>onClick()}
      >
        {label}
      </button>
    </>
  );
}

Button.defaultProps = {
  label: "Import Team",
  backgroundColor: colors.primary,
  width: "100%",
  height: "100%",
  borderRadius: 8,
  color: "white",
  border: "none",
  cursor: "pointer",
  onClick: ()=>console.log("clicked"),
  customStyle: {}
};

export default Button;
