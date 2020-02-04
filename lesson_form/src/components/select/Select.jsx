import React from "react";
import Selected from "react-select";
const options = [
  { value: "hight", label: "hight" },
  { value: "low", label: "low" },
  { value: "normal", label: "normal" }
];

const Select = onChooseSelect => (
  <div>
    <Selected options={options} onChange={e => onChooseSelect} />
  </div>
);
export default Select;
