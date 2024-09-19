import React from "react";

const Point = ({
  className = "",
  stroke = "#696969",
  fill = "#696969",
  onClick = () => {},
}) => {
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#696969"/>
    </svg>
  );
};

export default Point;



