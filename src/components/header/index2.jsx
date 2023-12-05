import React, { useEffect, useRef, useState } from "react";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";
import Button from "../button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Inputfield from "../inputfield/index";
import Edit from '../edit/index';
import { getLocalStorageItem } from "../../utils/localstorage";
export default function Header2() {
    const team = getLocalStorageItem("@team_number") || "My Team";

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
                    Formation Overview
                </p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <p
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
                        {team}
                    </p>
                </div>
            </div>
        </div>
    );
}

