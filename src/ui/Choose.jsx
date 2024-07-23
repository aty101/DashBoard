import Select from "react-select";

const Choose = ({
  data,
  isLoading,
  onChange,
  error,
  disabled,
  isMulti,
  defaultValue,
  placeholder,
  zindex = 100,
  isClearable = false,
}) => {
  console.log(placeholder);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      borderRadius: "6px",
      width: "100%",
      height: "100%",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
      "&:focus": {
        border: "none",
      },
      maxHeight: "60px", // Adjust this value as needed
      overflowY: "auto", // Enable scroll if height exceeds maxHeight
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: zindex + 1, // Ensure this value is high enough to be above other elements
      position: "absolute",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "100px",
      overflowY: "auto",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#02BEC4" // color for selected option
        : state.isFocused
        ? "#02bec4cc" // color when hovering over options
        : null,
      color: state.isSelected
        ? "#fff" // text color for selected option
        : state.isFocused
        ? "#333" // text color when hovering over options
        : "#333", // default text color
      "&:hover": {
        backgroundColor: "#f1f1f1", // hover color
        color: "#333", // hover text color
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#e0e0e0", // background color of selected options
      maxHeight: "100px", // Set a maximum height for selected options container
      overflowY: "auto", // Enable scroll if height exceeds maxHeight
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#333", // color of the selected option's text
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "#999", // color of the x icon
      "&:hover": {
        backgroundColor: "#cccccc", // hover background color of the x icon
        color: "#ff0000", // hover color of the x icon
      },
    }),
  };

  return (
    <div className="relative w-full" style={{ zIndex: zindex }}>
      <div className="relative z-10 flex items-center rounded-md border border-gray bg-bgColor transition-all focus:border-darkB">
        <Select
          styles={customStyles}
          className="h-full w-full p-[3px] ltr:pr-0 rtl:pl-0"
          options={data}
          onChange={onChange}
          isClearable={defaultValue && isClearable}
          isLoading={isLoading}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue && defaultValue}
          isMulti={isMulti}
          menuPosition="absolute"
        />
      </div>

      {error && (
        <div className="mt-[3px] p-[2px] text-sm text-red-700">{error}</div>
      )}
    </div>
  );
};

export default Choose;
