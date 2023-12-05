import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header2 from "../../components/header/index2";
import colors from "../../theme/colors";
import statics from "../../theme/statics";
import PlayerCard from "../../components/playercard";
import Modal from "../../components/model";
import { FaTriangleExclamation } from "react-icons/fa6";
import fonts from "../../theme/fonts";
import { getLocalStorageItem } from "../../utils/localstorage";

function Overview() {
  const [players, setPlayers] = useState([]);
  const [showModel, setModel] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });
  const [selectedPlayer,setSelectedPlayer] = useState(0);
  useEffect(() => {
    const data = getLocalStorageItem("@players");
    if (data == undefined || data == null || data.length < 1) {
      setModel(true)
      setError({ title: "No player data found", message: "Please import your roster first" })
      return
    }
    else {
      let starters = 0;
      let Goalkeeper = 0;
      let Defenders = 0;
      let Midfielders = 0;
      let Forwards = 0;
      const goal = [];
      const defend = [];
      const forward = [];
      const midfield = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i]?.["Starter"] == "Yes") {
          starters++;
          if (data[i]?.["Position"] == 'Defender'){
            defend.push(data[i]);
            Defenders++;
          }
          else if (data[i]?.["Position"] == 'Forward'){
            forward.push(data[i]);
            Forwards++;
          }
          else if (data[i]?.["Position"] == 'Midfielder'){
            midfield.push(data[i]);
            Midfielders++;
          }
          else if (data[i]?.["Position"] == 'Goalkeeper'){
            goal.push(data[i]);
            Goalkeeper++;
          }
        }
      }
      console.log("=================================")
      console.log("Starters : ", starters)
      console.log("Defenders : ", Defenders)
      console.log("Midfielders : ", Midfielders)
      console.log("Forwards : ", Forwards)
      console.log("Goalkeepers : ", Goalkeeper)
      console.log("=================================")
      if (Goalkeeper < 1 || Defenders < 4 || Midfielders < 3 || Forwards < 3) {
        setModel(true)
        setError({ title: "Not enough starters", message: "Your team doesn't have enough starters  for one or more of the positions in the 4-3-3 formation" })
        return
      }
      else if (Goalkeeper > 1 || Defenders > 4 || Midfielders > 3 || Forwards > 3) {
        setModel(true)
        setError({ title: "There are too many starters", message: "Your team has too many starters for one or more of the positions in the 4-3-3 formation." })
        return
      }
      else {
        setModel(false)
        setError({ title: "", message: "" })
        setPlayers([...goal,...defend,...midfield,...forward]);
      }
    }
  }, [])
  const PlayerCoin = ({ id,customStyles, }) => {
    let isSelected = id == selectedPlayer
    return ( 
      <div onClick={()=>setSelectedPlayer(id)} style={{ cursor:"pointer",display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center",...customStyles }}>
        <div style={{ width: 32, height: 32, borderRadius: 32, backgroundColor: isSelected ? colors.primary : colors.neturalBlack2,border:isSelected ? `1px solid ${colors.primary}` : `1px solid ${colors.textHeading}`, display: "flex", justifyContent: "center", alignItems: "center"  }}>
          <p style={{ textAlign: "center", margin: 0, whiteSpace: "nowrap", fontSize: 16, fontWeight: 600, color: colors.textHeading }}>{players[id]?.['Jersey Number']}</p>
        </div>
        <p style={{ textAlign: "center", margin: 0, whiteSpace: "nowrap", fontSize: 14, fontWeight: 500, color: colors.textHeading,lineHeight:3 }}>{players[id]?.["Player Name"]}</p>
      </div>
    )
  }
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Navbar page={"overview"} />
      <div style={{ flexGrow: 1, position: "relative" }}>
        <Header2 />
        <div style={{ width: "94%", height: "80vh", marginLeft: 40, borderRadius: 8, backgroundColor: colors.neturalBlack2, marginTop: 40, marginBottom: 40, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ width: "64%", height: "92%", position: "relative", marginLeft: "2%" }}>
            <img style={{ opacity: showModel == false ? 1 : 0.4, width: "100%", height: "100%" }} src={statics.field} />
            <div style={{ position: "absolute", top: 0, left: "6.5%", width: 32, height: '100%', display: 'flex', justifyContent: "center" }}>
              <PlayerCoin id={0} customStyles={{}}/>
            </div>
            <div style={{ position: "absolute", top: 0, left: "25%", transform: "translateX(-25%)", width: 32, height: '98%', display: 'flex', justifyContent: "space-around",flexDirection:"column",marginTop:"1%" }}>
              <PlayerCoin id={1} customStyles={{marginLeft:20}}/>
              <PlayerCoin id={2} customStyles={{}}/> 
              <PlayerCoin id={3} customStyles={{}}/>
              <PlayerCoin id={4} customStyles={{marginLeft:20}}/>
            </div>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 32, height: '90%', display: 'flex', justifyContent: "space-around",flexDirection:"column",marginTop:"5%" }}>
              <PlayerCoin id={5} customStyles={{}}/>
              <PlayerCoin id={6} customStyles={{}}/>
              <PlayerCoin id={7} customStyles={{}}/>
            </div>
            <div style={{ position: "absolute", top: 0, left: "75%", transform: "translateX(-75%)", width: 32, height: '75%', display: 'flex', justifyContent: "space-around",flexDirection:"column",marginTop:"10%" , marginBottom:"10%"}}>
              <PlayerCoin id={8} customStyles={{marginRight:25}}/>
              <PlayerCoin id={9} customStyles={{}}/> 
              <PlayerCoin id={10} customStyles={{marginRight:25}}/>
            </div>
          </div>
          <PlayerCard selectedPlayer={players[selectedPlayer]}/>
          {showModel == true && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 999 }}>
            <div style={{ width: 379, height: 127, backgroundColor: colors.neturalBlack2, borderRadius: 8, textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
                <FaTriangleExclamation size={18} color={colors.primary} />
                <p style={{ margin: 0, marginLeft: 10, fontSize: 18, color: colors.textHeading, fontWeight: fonts.mediumBoldWeight }}>
                  {error?.title}
                </p>
              </div>
              <p style={{ margin: 0, width: "90%", fontSize: 14, color: colors.textNormal, fontWeight: 400 }}>
                {error?.message}
              </p>
            </div>
          </div>}
        </div>
      </div>
    </div>

  );
}

export default Overview;
