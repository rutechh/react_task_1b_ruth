import React from "react";

const DownArrow = ({
  className = "",
  stroke = "#696969",
  fill = "#7B1113",
  onClick = () => {},
}) => {
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke= {stroke}
        strokeWidth="1.5"
        strokeWinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
