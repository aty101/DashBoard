import Select from "react-select";

import styles from "./styles/PopUpWindow.module.css";
import { useRef, useState } from "react";
function PopUpWindow({ type, setOpenAddPage, addData, getData, index }) {
  const schoolsOptions = [
    { value: "القاهرة", label: "القاهرة" },
    { value: "القليوبية", label: "القليوبية" },
  ];
  const depOptions = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 1,
      label: "2",
    },
    {
      value: 2,
      label: "3",
    },
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

  const inputTagsRef = useRef([]);
  const typeChange = (a, b) => {
    return type == "addSchool" ? a : b;
  };
  const handleClick = () => {
    addData(data);
    setSchoolName(null);
    setCityName(null);
    setSchoolNumber(null);
    setStudentsNumber(null);
    inputTagsRef.current.forEach((v, i) => {
      inputTagsRef.current[i].value = "";
    });
  };
  const data = getData();
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
        {typeChange(true, false) && (
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
        )}
        {swapContent && (
          <form>
            {typeChange(true, false) && (
              <input
                value={schoolName}
                ref={(el) => {
                  inputTagsRef.current.push(el);
                }}
                onChange={(e) => setSchoolName(e.target.value)}
                className={styles.addSchoolTag}
                placeholder={"اسم المدرسة"}
              ></input>
            )}
            {typeChange(false, true) && <div>miqwfiqjwfjoi</div>}
            <Select
              value={cityName}
              onChange={(selectedItem) => setCityName(selectedItem)}
              className={styles.addSchoolTag}
              placeholder={typeChange("المحافظة", "التخصص")}
              options={typeChange(schoolsOptions, depOptions)}
              styles={customStyles}
            ></Select>
            <input
              value={schoolNumber}
              type="number"
              ref={(el) => {
                inputTagsRef.current.push(el);
              }}
              onChange={(e) => setSchoolNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder={typeChange("رقم المدرسة", "عدد الطلاب")}
            ></input>
            <input
              value={studentsNumber}
              type="number"
              ref={(el) => {
                inputTagsRef.current.push(el);
              }}
              onChange={(e) => setStudentsNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder={typeChange("عدد الطلاب", "عدد المدرسين")}
            ></input>
            <button
              type="button"
              onClick={() => {
                data[index].studentsNumber[cityName.value] = schoolNumber;
                data[index].teachersNumber[cityName.value] = studentsNumber;
                console.log(cityName);
                console.log(data);
                addData(data);
                setSchoolName(null);
                setCityName(null);
                setSchoolNumber(null);
                setStudentsNumber(null);
                inputTagsRef.current.forEach((v, index) => {
                  inputTagsRef.current[index].value = "";
                });
              }}
            >
              تأكيد
            </button>
          </form>
        )}
        {!swapContent && (
          <div>
            <form>
              <input type="file" onChange={(e) => handleDataReading}></input>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default PopUpWindow;
