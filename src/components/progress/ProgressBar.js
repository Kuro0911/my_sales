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
    <ProgressBarWrapper done={done}>
      <div className="progress-done" style={style}></div>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
