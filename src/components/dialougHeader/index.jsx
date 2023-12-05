import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

export default function DialougeHeader({title,onClose,border}) {
    return (
        <div style={{ width: "90%", height: 60, borderBottom:border ?  `1px solid ${colors.border}`:'none', marginLeft: "5%" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: colors.textHeading, fontWeight: fonts.regularWeight, fontSize: fonts.largeSize }}>{title}</p>
                <FaXmark onClick={onClose} size={fonts.mediumLargeSize} style={{ cursor: "pointer" }} color={colors.textHeading} />
            </div>
        </div>
    )
}
