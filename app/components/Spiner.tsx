import React from "react";

const LoadingSpinner: React.FC = () => {
  const spinnerStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    position: "relative",
    margin: "100px auto",
  };

  const bounceStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#09f",
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
    animation: "bounce 2.0s infinite ease-in-out",
  };

  const bounceStyle2: React.CSSProperties = {
    ...bounceStyle,
    animationDelay: "-1.0s",
  };

  return (
    <div style={spinnerStyle}>
      <div style={bounceStyle}></div>
      <div style={bounceStyle2}></div>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: scale(0.0) }
            50% { transform: scale(1.0) }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
