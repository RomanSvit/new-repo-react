import React from "react";
import Selected from "react-select";
const options = [
  { value: "high", label: "high" },
  { value: "low", label: "low" },
  { value: "normal", label: "normal" }
];

const Select = ({onChooseSelect}) => (
  <div>
    <Selected options={options} onChange={e => onChooseSelect(e)} />
  </div>
);
export default Select;
