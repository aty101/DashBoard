export const citiesStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    width: "100%",
   background:"#d9e5ed",
    height: "100%",
    minHeight: "0",
    minWidth: "0",
    borderRadius: "10px",
  }),
  input: (provided) => ({
    ...provided,
    minHeight: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
export const schoolsStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    background: "#d9e5ed",
    width: "100%",
    height: "100%",
    minHeight: "0",
    minWidth: "0",
    borderRadius: "10px",
    boxShadow: "none",
  }),
  input: (provided) => ({
    ...provided,
    minHeight: "0",
    height: "100%",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
};
export const popUpStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    height: "100%",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "100%",
  }),
  input: (provided) => ({
    ...provided,

    height: "100%",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "100%",
  }),
};