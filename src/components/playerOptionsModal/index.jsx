import React from 'react'
import DialougeHeader from '../dialougHeader'
import { FaPen, FaTrash } from 'react-icons/fa6'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

export default function PlayerOptionsModal({setShowActionModel,editAction,deleteAction}) {
   
    return (
        <div style={{ width: 235, height: 170, backgroundColor: colors.neturalBlack2, borderRadius: 8 }}>
            <DialougeHeader border={false} title={"Actions"} onClose={() => setShowActionModel(null)} />
            <div style={{ display: "flex", flexDirection: "column", width: "90%", marginLeft: "5%" }}>
                <div onClick={()=>editAction()} style={{ display: "flex", cursor: "pointer", flexDirection: "row", alignItems: "center", height: 40 }}>
                    <FaPen size={16} style={{ marginRight: 10 }} color={colors.textMuted} />
                    <p style={{ margin: 0, color: colors.textNormal, fontSize: fonts.mediumSize }}>Edit Player</p>
                </div>
                <div onClick={()=>deleteAction()} style={{ display: "flex", cursor: "pointer", flexDirection: "row", alignItems: "center", height: 40 }}>
                    <FaTrash size={16} style={{ marginRight: 10 }} color={colors.textMuted} />
                    <p style={{ margin: 0, color: colors.textNormal, fontSize: fonts.mediumSize }}>Delete Player</p>
                </div>
            </div>
        </div>
    )
}
