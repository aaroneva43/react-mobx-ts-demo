import React, { CSSProperties } from "react";
import moment from "moment";

const defaultStyle: CSSProperties = {
  color: "#996699",
  textAlign: "right",
  fontSize: "1rem",
  fontStyle: "italic",
  marginRight: "24px"
};

export function YearProgress() {
  const yearOfEnd = moment().endOf("year");
  const percent = moment().valueOf() / yearOfEnd.valueOf();
  const renderCount = 16 * percent;

  let progress = "";

  for (let i = 0; i < renderCount; i++) {
    progress = progress.concat("▓");
  }
  return (
    <div style={defaultStyle}>
      {progress} <span>{(percent * 100).toFixed(2)}%</span>
    </div>
  );
}
