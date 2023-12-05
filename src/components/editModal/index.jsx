import React, { useEffect, useState } from 'react'
import Radio from '../radio'
import DropDown from '../dropdown'
import InputTextField from '../textInput'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import DialougeHeader from '../dialougHeader'
import Button from '../button'

export default function EditModal({ countries, positions, setEditModel, selectedPlayer, editPlayer }) {
    const [player, setPlayer] = useState({})
    const [verify, setVerify] = useState(false);
    useEffect(() => {
        let temp = { ...selectedPlayer };
        setPlayer(temp)
    }, [selectedPlayer])

    return (
        <div style={{ width: 480, height: 582, backgroundColor: colors.neturalBlack2, borderRadius: 8 }}>
            <DialougeHeader border={false} title={"Edit Player"} onClose={() => setEditModel(false)} />
            <div style={{ width: 432, marginTop: 20, height: 412, marginInline: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "100%", height: "18%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <InputTextField type={"text"} defaultValue={player?.["Player Name"]} width={274} label={"Player Name"} placeholder={"Yoshitha Peddireddy"} onChangeText={(e) => { player["Player Name"] = e; setVerify(true) }} />
                    <InputTextField type={"number"} defaultValue={player?.["Jersey Number"]} width={142} label={"Jersey Number"} placeholder={"44"} onChangeText={(e) => { player["Jersey Number"] = e; setVerify(true) }} />
                </div>
                <div style={{ width: "100%", height: "18%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <InputTextField type={"number"} defaultValue={player?.["Height"]} width={208} label={"Height"} placeholder={"180"} onChangeText={(e) => { player["Height"] = e; setVerify(true) }} />
                    <InputTextField type={"number"} defaultValue={player?.["Weight"]} width={208} label={"Weight"} placeholder={"65"} onChangeText={(e) => { player["Weight"] = e; setVerify(true) }} />
                </div>
                <div style={{ width: "100%", height: "18%" }}>
                    <DropDown onChange={(e) => { player["Nationality"] = e; setVerify(true) }} defaultValue={player?.["Nationality"]} width={"100%"} label={"Nationality"} options={countries} />
                </div>
                <div style={{ width: "100%", height: "18%" }}>
                    <DropDown onChange={(e) => { player["Position"] = e; setVerify(true) }} defaultValue={player?.["Position"]} width={"100%"} label={"Position"} options={positions} />
                </div>
                <div style={{ width: "100%", height: "18%" }}>
                    <Radio onChange={(e) => { player["Starter"] = e; setVerify(true) }} defaultValue={player?.["Starter"]} width={"100%"} label={"Starter"} />
                </div>
            </div>
            <div style={{ width: 114, height: 44, marginTop: 20, marginRight: "6%", marginLeft: "auto" }}>
                <Button label={"Edit Player"} onClick={() => verify ? editPlayer(player) : console.log("make some changes")} backgroundColor={verify ? colors.primary : "transparent"} customStyle={{ color: verify ? "white" : colors.textMuted }} />
            </div>
        </div>
    )
} 
