
import React, { useEffect, useState } from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const DropDown = ({ width, label , options,defaultValue,onChange}) => {

    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value)
    };
    useEffect(()=>{
        setSelectedOption(defaultValue)
    },[defaultValue])
    return (

        <div style={{ width: width, height: "100%", display: "flex", flexDirection: "column" }}>
            <p style={{ color: colors.textNormal, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight, textAlign: "left", margin: 0, marginBottom: 8 }}>
                {label}
            </p>
            <div style={{width:"100%",display:"flex"}}>
                <select
                    id="selection"
                    value={selectedOption}
                    onChange={handleSelectionChange}
                    style={{ width:"100%",height: 44,color:selectedOption == '' ? colors.textMuted : colors.textNormal, backgroundColor: "transparent", outline: "none", border: `1px solid ${colors.border}`, borderRadius: 8, padding: 5 ,}}
                >
                    {options.map((option) => (
                        <option key={option} value={option} style={{color:colors.textNormal,backgroundColor:colors.neturalBlack,}} >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
};

export default DropDown;