import React from "react";
import Navbtn from "../navBtn";
import colors from '../../theme/colors';
import { FaBars } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import Logocontainer from "../logo";

export default function Navbar({page}) {
  return (
    <div
      style={{
        width: "5%",
        backgroundColor: colors.neturalBlack3,
        height: "100%",
      }}
    >
      <Logocontainer />
      <Navbtn page={"/"} isSelected={page == "home" ? true : false}>
        <FaBars size={16} color={page == "home" ? colors.primary : colors.primaryDull} />
      </Navbtn>
      <Navbtn page={"/overview"} isSelected={page == "overview" ? true : false}>
        <FaUsersLine size={16} color={page == "overview" ? colors.primary :colors.primaryDull} />
      </Navbtn>
    </div>
  );
}
