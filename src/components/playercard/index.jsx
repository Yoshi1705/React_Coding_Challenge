import React from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import PlayerCardInfo from '../playerCardInfor'
import OverlayImage from '../ovvrlay'

export default function PlayerCard({selectedPlayer}) {
    const JersyNumberComponent = ({number}) => {
        return (
            <div style={{ position: "relative", display: "flex", marginLeft: "5%", marginTop: 20, flexDirection: "row", alignItems: "center" }}>
                <p style={{ fontSize: 40, color: colors.primary, textAlign: "left", margin: 0, zIndex: 2, opacity: 1, fontWeight: fonts.regularWeight }}>{number}</p>
                <p style={{ fontSize: 100, color: colors.primary, textAlign: "left", margin: 0, zIndex: 1, opacity: 0.1, position: "absolute", fontWeight: fonts.mediumBoldWeight }}>{number}</p>
            </div>
        )
    }
    const PlayerHeader = ({playerInfo}) => {
         return (
         <div style={{ width: "100%", marginInline: "auto", height: 63 }}>
                <p style={{ margin: 0, textAlign: "left", fontSize: 24, color: colors.textHeading }}>{playerInfo?.['Player Name']}</p>
                <p style={{ margin: 0, textAlign: "left", fontSize: 18, color: colors.primary, fontWeight: fonts.mediumBoldWeight }}>{playerInfo?.['Position']}</p>
            </div>
         )
    }
 
    const PlayerInfo = ({playerInfo}) => {
        return (
            <div style={{ width: "100%", height: "20%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               {playerInfo != null && <div>
                    <p style={{ color: colors.textNormal, fontSize: fonts.smallSize, margin: 0, textAlign: "left" }}>Height</p>
                    <p style={{ color: colors.textHeading, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight }}>1.85 m</p>
                </div>}
                {playerInfo != null && <div>
                    <p style={{ color: colors.textNormal, fontSize: fonts.smallSize, margin: 0, textAlign: "left" }}>Weight</p>
                    <p style={{ color: colors.textHeading, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight }}>80 kg</p>
                </div>}
                {playerInfo != null && <div>
                    <p style={{ color: colors.textNormal, fontSize: fonts.smallSize, margin: 0, textAlign: "left" }}>Nationality</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src="sample.png" style={{ width: 16, height: 16, marginRight: 8 }} />
                        <p style={{ color: colors.textHeading, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight }}>Costa Rican</p>
                    </div>
                </div>}
            </div>
        )
    }
    const PlayerStats = ({ playerInfo }) => {
        return (
            <div style={{ height: "30%", width: "100%" }}>
                {playerInfo != null && <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "50%" }}>
                    <PlayerCardInfo value={24} title={"Apperences"} />
                    <PlayerCardInfo value={2308} title={"Minutes Played"} />
                </div>}
                {playerInfo != null && <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "50%" }}>
                    <PlayerCardInfo value={10} title={"Clean sheets"} />
                    <PlayerCardInfo value={76} title={"Saves"} />
                </div>}
            </div>
        )
    }
    const Border = () => {
        return (
            <div style={{ border: `1px solid ${colors.border}` }}></div>
        )
    }

    return (
        <div style={{ height: "92%", width: "30%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colors.neturalBlack, borderRadius: 4, marginRight: "2%" }}>
            <div style={{ height: "95%", width: "90%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <div style={{ height: "70%", width: "100%" }}>
                    <div style={{ width: "100%", height: "80%" }}>
                        <OverlayImage player={selectedPlayer} imageUrl={selectedPlayer?.['Player Image']} overlayOpacity={1}>
                            <JersyNumberComponent number={selectedPlayer?.['Jersey Number']}/>
                            <PlayerHeader playerInfo={selectedPlayer} />
                        </OverlayImage>
                    </div> 
                    <PlayerInfo playerInfo={selectedPlayer} />
                </div>
                <Border />
                <PlayerStats playerInfo={selectedPlayer} />
            </div>
        </div>
    )
}
