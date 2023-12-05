import React from "react";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

function Inputfield({ placeholder,onChange,submit,inputRef,setSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submit(true)
    }
    if (event.key === 'Escape') {
      inputRef.current.value = "";
      setSearch("")
      submit(false)
    }
  };
  return (
    <div style={{maxWidth:"60%"}}>
      <input
        ref = {inputRef}
        style={{
          marginLeft: 5,
          outline: "none",
          color: colors.textNormal,
          backgroundColor: "transparent",
          border: "none",
          fontFamily: fonts.primaryFont,
          width:"100%"
        }}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        type="text"
      />
    </div>
  );
}

Inputfield.defaultProps = {
  placeholder: "Find Player", // Default placeholder text
};

export default Inputfield;
