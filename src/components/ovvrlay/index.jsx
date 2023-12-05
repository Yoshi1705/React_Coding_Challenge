import React from 'react'


const OverlayImage = ({ imageUrl, overlayColor, overlayOpacity, children, player }) => {
    const containerStyle = {
        position: "relative",
        width: "100%",
        height: "90%",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0.38) 60.94%, #222222 100%)",
        opacity: overlayOpacity || 0.5,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };

    const imageStyle = {
        height: "100%",
        position: "relative",
        zIndex: 1,
    };
    console.log(imageUrl)
    return (
        <div style={containerStyle}>
            {player != null && <div style={overlayStyle}>
                {children}
            </div>}
            {player != null && <img src={imageUrl} alt="Overlay Image" style={imageStyle} />}
        </div>
    );
};

export default OverlayImage