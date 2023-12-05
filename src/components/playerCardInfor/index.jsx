import React from 'react'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export default function PlayerCardInfo({value,title}) {
    return (
        <div style={{ height: "100%", width: "50%", flexFlow: "column-reverse", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{ textAlign: "left", fontSize: 24, color: colors.primary, margin: 0 }}>{value}</p>
            <p style={{ fontSize: fonts.smallSize, color: colors.textNormal, textAlign: "left", margin: 0, marginBottom: 15 }}>{title}</p>
        </div>
    )
}
