import React from 'react'
import DialougeHeader from '../dialougHeader'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import Button from '../button'

export default function DeleteModal({ setDeleteConfirmModel, setSelectedPlayer, deletePlayer }) {
    return (
        <div style={{ width: 380, height: 190, borderRadius: 8, backgroundColor: colors.neturalBlack2 }}>
            <DialougeHeader title={"Are you sure?"} onClose={() => {
                setSelectedPlayer(null)
                setDeleteConfirmModel(false)
            }} />
            <div style={{ width: "90%", marginLeft: "5%", color: colors.textNormal, fontSize: fonts.mediumSize, }}>
                <p style={{ textAlign: "left" }}>This action cannot be undone.</p>
                <div style={{ display: "flex", flexDirection: "row", height: 44, flexFlow: "row-reverse", marginTop: 30 }}>
                    <div style={{ width: 90, marginLeft: 10, cursor: "pointer" }}>
                        <Button onClick={() => {
                            deletePlayer()
                        }} label={"Delete"} backgroundColor={colors.red} />
                    </div>
                    <div style={{ width: 90, cursor: "pointer" }}>
                        <Button onClick={() => {
                            setDeleteConfirmModel(false)
                            setSelectedPlayer(null)
                        }} label={"Cancel"} backgroundColor={"transparent"} customStyle={{ border: `1px solid ${colors.border}` }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
