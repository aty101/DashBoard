import { useEffect } from "react";
import Select from "react-select";

export default function Selector({ options, setter, label, val }) {
  
  return (
    <div className="flex flex-col p-2 gap-2 w-80 min-h-10">
      <label className="text-right">{label}</label>
      <Select
        value={val} // Control the value of the Select component
        options={options}
        onChange={(e) => setter(e)}
        placeholder=""
      />
    </div>
  );
}
