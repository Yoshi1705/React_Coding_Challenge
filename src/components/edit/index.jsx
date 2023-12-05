import React, { useState } from "react";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { FaPen } from "react-icons/fa";
import { setLocalStorageItem } from "../../utils/localstorage";

function Edit({ initialText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(initialText);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setLocalStorageItem("@team_number",editedText)
      setIsEditing(false);
    }
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleTextChange}
          onBlur={() => setIsEditing(false)}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{
            outline: "none",
            color: colors.textNormal,
            backgroundColor: "transparent",
            border:'none',
            fontFamily: fonts.primaryFont,
            fontWeight : fonts.mediumBoldWeight,
            fontSize : fonts.largeSize
          }}
        />
      ) : (
        <div style={{display : 'flex',flexDirection : 'row', justifyContent : 'center',alignItems : 'center'}}>
        <p
          onClick={handleEdit}
          style={{
            fontFamily: fonts.primaryFont,
            fontWeight: fonts.mediumBoldWeight,
            fontSize: fonts.largeSize,
            color: colors.textHeading,
            margin: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {editedText}  
        </p>
        <FaPen onClick={handleEdit} size={14} style={{color : colors.textHeading,marginLeft : 8,cursor:"pointer"}} />
        </div>
      )}
    </div>
  );
}

export default Edit;
