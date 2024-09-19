import React from "react";

const ColumnIcon = ({
  className = "",
  stroke = "#717179",
  fill = "#717179",
  onClick = () => {},
}) => {
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 1.75H1.75V12.25H6.25V1.75ZM7.75 1.75V12.25H12.25V1.75H7.75ZM1 0.25H13C13.1989 0.25 13.3897 0.329018 13.5303 0.46967C13.671 0.610322 13.75 0.801088 13.75 1V13C13.75 13.1989 13.671 13.3897 13.5303 13.5303C13.3897 13.671 13.1989 13.75 13 13.75H1C0.801088 13.75 0.610322 13.671 0.46967 13.5303C0.329018 13.3897 0.25 13.1989 0.25 13V1C0.25 0.801088 0.329018 0.610322 0.46967 0.46967C0.610322 0.329018 0.801088 0.25 1 0.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default ColumnIcon;
