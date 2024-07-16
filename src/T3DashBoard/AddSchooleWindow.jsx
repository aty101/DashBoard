import Select from "react-select";
import "./styles/AddSchooleWindow.css";
function AddSchooleWindow({ set }) {
  const options = [
    { value: "القاهرة", label: "القاهرة" },
    { value: "القليوبية", label: "القليوبية" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: "black",
      height: "100%",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "100%",
    }),
    input: (provided, state) => ({
      ...provided,

      height: "100%",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "100%",
    }),
  };

  return (
    <div className="popUpWindowBackGround">
      <div className="popUpWindow">
        <form>
          <input className="addSchoolTag" placeholder="اسم المدرسة"></input>
          <Select
            className="addSchoolTag"
            placeholder="المحافظة"
            options={options}
            styles={customStyles}
          ></Select>
          <input className="addSchoolTag" placeholder="رقم المدرسة"></input>
          <input className="addSchoolTag" placeholder="عدد الطلاب"></input>
        </form>
      </div>
    </div>
  );
}
export default AddSchooleWindow;
