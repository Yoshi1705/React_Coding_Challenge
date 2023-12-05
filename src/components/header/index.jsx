import React, { useEffect, useRef, useState } from "react";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";
import Button from "../button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Inputfield from "../inputfield/index";
import Edit from '../edit/index';
import { getLocalStorageItem } from "../../utils/localstorage";
export default function Header({ showImportModel, teamLoaded, updateTable }) {
  const [search, setSearch] = useState("")
  const [submit, setSubmit] = useState(false);
  const team = getLocalStorageItem("@team_number");
  const inputRef = useRef();
  useEffect(()=>{
      updateTable(search);
  },[submit])
  return (
    <div
      style={{
        height: 44,
        display: "flex",
        flexGrow: 1,
        marginTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 44,
          minWidth: "12%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p
          style={{
            fontFamily: fonts.primaryFont,
            fontWeight: fonts.regularWeight,
            fontSize: fonts.smallSize,
            color: colors.primary,
            margin: 0,
          }}
        >
          Roster Details
        </p>
        <Edit initialText={team == undefined ? 'My Team' : team} />
      </div>
      <div
        style={{
          height: 44,
          width: "30%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "64%",
            border: `1px solid ${colors.border}`,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"space-between",
          }}
        >
          <div style={{display:"flex",flexDirection:'row',alignItems:"center"}}>
          <FaMagnifyingGlass style={{ width: 40 }} size={14} color={colors.textMuted} />
          <Inputfield inputRef={inputRef} setSearch={setSearch} onChange={(e) => { setSearch(e); setSubmit(false) }} submit={(x) => setSubmit(x)} placeholder={"Find Player"} />
          </div>
          {(search.length > 0 && submit == false) && <p onClick={() => setSubmit(true)} style={{ cursor: "pointer", fontFamily: fonts.primaryFont, color: colors.primary, fontSize: fonts.mediumSize,marginRight:10 }}>Search</p>}
          {(search.length > 0 && submit == true) && <MdClose onClick={() => {
            setSearch("")
            setSubmit(false)
            inputRef.current.value = ""
          }} style={{ width: 40,display:"flex" }} size={14} color={colors.textMuted} />}
        </div>
        <div style={{ height: "100%", width: "34%" }}>
          <Button onClick={() => { showImportModel() }} customStyle={{ backgroundColor: teamLoaded == false ? colors.primary : "transparent", border: teamLoaded ? `1px solid ${colors.border}` : 'none', color: teamLoaded ? colors.textMuted : colors.textHeading }} label={teamLoaded ? "Re-Import Team" : "Import Team"} />
        </div>
      </div>
    </div>
  );
}
