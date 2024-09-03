import { useEffect } from "react";
import Select from "react-select";

export default function Selector({ options, setter, label, val, disabled }) {
  return (
    <div className="flex flex-col p-2 gap-2 w-80 min-h-10">
      <label className="text-right">{label}</label>
      <Select
        isDisabled={disabled}
        value={val}
        options={options}
        onChange={(e) => {
          setter(e);
        }}
        placeholder=""
      />
    </div>
  );
}
