import React from 'react'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export default function InputTextField({width,onChangeText,label,placeholder,defaultValue,type}) {
    return (
        <div style={{ width: width, height: "100%", display: "flex", flexDirection: "column" }}>
            <p style={{ color: colors.textNormal, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight, textAlign: "left", margin: 0, marginBottom: 8 }}>
                {label}
            </p>
            <input defaultValue={defaultValue} onChange={(e) => onChangeText(e.target.value)} type={type} placeholder={placeholder} style={{ width: "100%", fontFamily: fonts.primaryFont, color: colors.textNormal, flex: 1, borderRadius: 8, backgroundColor: "transparent", border: `1px solid ${colors.border}`, outline: "none", paddingLeft: 10, boxSizing: "border-box" }} />
        </div>
    )
} 
