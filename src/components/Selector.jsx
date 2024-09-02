import Select from "react-select";

export default function Selector({ options, setter, children }) {
  return (
    <div className=" flex flex-col p-2 gap-2  w-80 min-h-10 ">
      <label className="text-right">{children}</label>
      <Select
        placeholder=""
        options={options}
        onChange={(e) => {
          setter(e.value);
        }}
      ></Select>
    </div>
  );
}
