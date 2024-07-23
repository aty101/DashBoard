export const citiesStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    width: "100%",
    height: "100%",
    minHeight: "0",
    minWidth: "0",
    borderRadius: "30px",
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
    width: "100%",
    height: "100%",
    minHeight: "0",
    minWidth: "0",
    borderRadius: "30px",
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
