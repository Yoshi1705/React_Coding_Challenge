import React from 'react'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export default function RefiendData({ refinedData }) {
    const Stats = ({title, value}) => {
        return (
            <div>
                <p style={{margin:0,fontFamily:fonts.primaryFont,color:colors.textNormal,fontSize:fonts.mediumSize,fontWeight:400}}>{title}</p>
                <p style={{margin:0,marginTop:9,fontFamily:fonts.primaryFont,color:colors.textNormal,font:fonts.mediumLargeSize,fontWeight:fonts.mediumBoldWeight}}>{value}</p>
            </div>
        )
    }
    return (
        <div style={{ marginTop: 30 }}>
            <p style={{ fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight, color: colors.textHeading, margin: 0 }}>File Summary</p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                <Stats title={"Total Players"} value={refinedData?.total_players}/>
                <Stats title={"Goalkeepers"} value={refinedData?.goal_keepers}/>
                <Stats title={"Defenders"} value={refinedData?.defenders}/>
                <Stats title={"Midfielders"} value={refinedData?.mid_fielders} />
                <Stats title={"Forwards"} value={refinedData?.forwards}/>
            </div>
        </div>
    )
}
