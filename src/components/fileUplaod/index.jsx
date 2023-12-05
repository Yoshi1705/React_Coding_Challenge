import React, { useState } from 'react';
import fonts from '../../theme/fonts';
import Button from '../button';
import colors from '../../theme/colors';
import Papa from 'papaparse';
import RefiendData from '../RefinedData';

export default function FileUpload({ data, setData, borderColor, info, error, setFile, file, setError }) {
    const [refinedData, setRefinedData] = useState(null);
    const analyseData = (selectedFileData) => {
        const refine = {
            total_players: 0,
            goal_keepers: 0,
            defenders: 0,
            mid_fielders: 0,
            forwards: 0,
        }

        refine.total_players = selectedFileData.length;
        selectedFileData.map((i) => {
            switch (i?.Position.toLowerCase()) {
                case "defender":
                    refine.defenders++;
                    break;
                case "goalkeeper":
                    refine.goal_keepers++;
                    break;
                case "midfielder":
                    refine.mid_fielders++;
                    break;
                case "forward":
                    refine.forwards++;
                    break;
            }
        })

        setRefinedData(refine)
    }

    const readCSV = (selectedFile) => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvText = event.target.result;
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: 'greedy',
                    dynamicTyping: true,
                    complete: (result) => {
                        if (result.errors.length > 0) {
                            setData([]);
                            setFile(null);
                            setError(true);
                        } else {
                            setData(result.data);
                            setFile(selectedFile);
                            setError(false);
                            analyseData(result.data)
                        }
                    },
                });
            };

            reader.readAsText(selectedFile);
        } else {
            setData([]);
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        if (selectedFile && selectedFile.name.endsWith('.csv')) {
            readCSV(selectedFile)
        } else {
            setFile(null);
            setError(true)
        }
    };

    return (
        <div style={{ width: '90%', marginLeft: '5%', textAlign: 'left', marginTop: 30 }}>
            <p style={{ fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight, color: colors.textHeading, margin: 0 }}>Roster File</p>
            <div style={{ paddingLeft: '12px', marginTop: 8, height: 44, width: 300, border: `1px solid ${borderColor}`, borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <input type="file" accept=".csv" style={{ display: 'none' }} onChange={handleFileChange} />
                <p style={{ color: colors.textMuted, fontSize: 14 }}>{file != null ? (file?.name || 'No file selected') : 'No file selected'}</p>
                <Button
                    width={'35%'}
                    label={'Select File'}
                    backgroundColor={'transparent'}
                    customStyle={{ borderLeft: `1px solid ${colors.border}`, fontWeight: fonts.regularWeight, color: colors.textNormal }}
                    onClick={() => document.querySelector('input[type="file"]').click()}
                />
            </div>
            {error && <p style={{ fontWeight: fonts.regularWeight, margin: 0, marginTop: 20, fontSize: fonts.mediumSize, color: colors.red }}>Error </p>}
            <p style={{ fontSize: fonts.mediumSize, color: colors.textMuted, marginTop: 4 }}>{info}</p>
            {(refinedData != null && error == false) && <RefiendData refinedData={refinedData} />}
        </div>
    );
}
