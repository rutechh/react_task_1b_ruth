import React from "react";

const UpArrowIcon = ({
  className = "",
  stroke = "#9BFF00",
  fill = "#7B1113",
  onClick = () => {},
}) => {
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_8111_152)">
        <path
          d="M10.0085 3.75833V16.25"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.01929 8.76167L10.0001 3.74833L14.981 8.76167"
          stroke="#9BFF00"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_8111_152">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UpArrowIcon;
