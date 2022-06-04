import React, { useState } from "react";
import ProgressBarWrapper from "./ProgressBar.style";

function ProgressBar({ done }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <ProgressBarWrapper>
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
