import React, { useEffect, useState } from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Radio = ({label,width,defaultValue,onChange}) => {
    const options = ['No', 'Yes'];

    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleOptionChange = (event) => {
        setSelectedOption(event);
        onChange(event)
    };
    useEffect(()=>{
        setSelectedOption(defaultValue)
    },[defaultValue])
    return (
        <div style={{ width: width, height: "100%", display: "flex", flexDirection: "column" }}>
            <p style={{ color: colors.textNormal, fontSize: fonts.mediumSize, fontWeight: fonts.regularWeight, textAlign: "left", margin: 0, marginBottom: 8 }}>
                {label}
            </p>
            <div style={{ width: "100%", display: "flex" ,marginTop:10}}>
                {options.map((option) => (
                    <label onClick={()=>handleOptionChange(option)} key={option} style={{marginRight:10,color:colors.textNormal,fontSize:fonts.mediumSize,backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:8,height:8,borderRadius:8,marginRight:4,backgroundColor:"transparent",border:selectedOption == option ? `4px solid ${colors.primary}` : `4px solid ${colors.border}`}}>
                        </div>
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Radio;
