import React, { useEffect, useState } from 'react'
import DialougeHeader from '../dialougHeader'
import FileUpload from '../fileUplaod'
import Button from '../button'
import colors from '../../theme/colors'
import { setLocalStorageItem } from '../../utils/localstorage'

export default function ImportFileModal({setShowImportModel,setPlayers}) {
    const [error,setError] = useState(false)
    const [file,setFile] = useState(null)
    const [data,setData] = useState([])
    return (
        <div className="importDialog" style={{ width: 800, height: 600, backgroundColor: colors.neturalBlack2, borderRadius: 8 }}>
            <div style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "100%", height: "88%" }}>
                    <DialougeHeader border={true} title={"Importer"} onClose={() => setShowImportModel(false)} />
                    <FileUpload data={data} setData={setData} error={error} setError={setError} file={file} setFile={setFile} onFileChange={(file)=>console.log(file)} info={error == false ? "File must be in .csv format" : "Your sheet is missing data. Please ensure all cells are filled out."} borderColor={error ? colors.red : colors.border} />
                </div>
                <div style={{ width: "100%", height: "12%", display: "flex", alignItems: "center", flexFlow: "row-reverse" }}>
                    <div style={{ width: 88, height: 44, margin: '12px 20px 11px 20px' }}>
                        <Button onClick={()=>{
                            if(error == false){
                                if(file != null){
                                    setLocalStorageItem("@players",data)
                                    setPlayers(data)
                                    setShowImportModel(false)
                                }
                            }
                        }} label={'Import'} backgroundColor={(file != null && error == false) ? colors.primary : "transparent"} customStyle={{ color:(file != null && error == false) ? colors.textHeading : colors.textMuted }} />
                    </div>
                </div>
            </div>
        </div> 
    )
}
