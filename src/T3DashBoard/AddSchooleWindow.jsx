import Select from "react-select";

import styles from "./styles/AddSchooleWindow.module.css";
import { useState } from "react";
function AddSchooleWindow({ setOpenAddPage }) {
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

  const [schoolName, setSchoolName] = useState();
  const [cityName, setCityName] = useState();
  const [schoolNumber, setSchoolNumber] = useState();
  const [studentsNumber, setStudentsNumber] = useState();
  const [swapContent, setSwapContent] = useState(true);
  const [excelData,setExcelData] = useState();
  
  return (
    <div className={styles.popUpWindowBackGround}>
      <div className={styles.popUpWindow}>
        <span
          onClick={() => {
            setOpenAddPage(false);
          }}
          className={styles.closeButton}
        >
          ✖
        </span>
        <nav className={styles.navBar}>
          <div
            onClick={() => {
              setSwapContent(true);
            }}
            className={styles.navButtons}
          >
            اضافة مدرسة
          </div>
          <div
            onClick={() => {
              setSwapContent(false);
            }}
            className={styles.navButtons}
          >
            اضافة مجموعة مدارس
          </div>
        </nav>
        {swapContent && (
          <form>
            <input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className={styles.addSchoolTag}
              placeholder="اسم المدرسة"
            ></input>
            <Select
              value={cityName}
              onChange={(selectedItem) => setCityName(selectedItem)}
              className={styles.addSchoolTag}
              placeholder="المحافظة"
              options={options}
              styles={customStyles}
            ></Select>
            <input
              value={schoolNumber}
              onChange={(e) => setSchoolNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder="رقم المدرسة"
            ></input>
            <input
              value={studentsNumber}
              onChange={(e) => setStudentsNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder="عدد الطلاب"
            ></input>
          </form>
        )}
        {!swapContent && (
          <div>
            <form>
              <input type="file"  onChange={(e)=>handleDataReading}></input>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default AddSchooleWindow;
