import Select from "react-select";
import * as XLSX from "xlsx";

import styles from "./styles/PopUpWindow.module.css";
import { useEffect, useRef, useState } from "react";
function PopUpWindow({
  type,
  setOpenAddPage,
  addData,
  getData,
  index,
  studentsBackUp,
  setStudentsBackUp,
}) {
  const data = getData();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
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

  const [schoolName, setSchoolName] = useState("");
  const [cityDepName, setCityDepName] = useState("");
  const [addressStudentsNumber, setAddressStudentsNumber] = useState("");
  const [studentsTeachersNumber, setStudentsTeachersNumber] = useState("");
  const [swapContent, setSwapContent] = useState(true);

  const handleDataChange = () => {
    if (type != "addSchool") {
      {
        const calc = data[index].totalStudents - addressStudentsNumber;

        if (calc >= 0) {
          data[index].studentsNumber[cityDepName.value] = addressStudentsNumber;
          data[index].teachersNumber[cityDepName.value] =
            studentsTeachersNumber;
          addData(data);

          studentsBackUp[index] -= addressStudentsNumber;
          setStudentsBackUp(studentsBackUp);
          setSchoolName("");
          setCityDepName("");
          setAddressStudentsNumber("");
          setStudentsTeachersNumber("");

          -addressStudentsNumber;
          inputTagsRef.current.forEach((v, index) => {
            inputTagsRef.current[index].value = "";
          });
        } else {
        }
      }
    } else {
      data.push({
        name: schoolName,
        address: addressStudentsNumber,
        city: "القاهرة",
        departments: [],
        studentsNumber: studentsTeachersNumber,
      });
      addData(data);
      setSchoolName("");
      setCityDepName("");
      setAddressStudentsNumber("");
      setStudentsTeachersNumber("");
      inputTagsRef.current.forEach((v, index) => {
        inputTagsRef.current[index].value = "";
      });
    }
  };

  const inputTagsRef = useRef([]);
  const typeChange = (a, b) => {
    return type == "addSchool" ? a : b;
  };

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
                onKeyDown={(e) => {
                  if (e.key == "Escape") {
                    setOpenAddPage(false);
                  }
                  if (e.key == "Enter") {
                    handleDataChange();
                  }
                }}
                value={schoolName}
                ref={(el) => {
                  inputTagsRef.current.push(el);
                }}
                onChange={(e) => setSchoolName(e.target.value)}
                className={styles.addSchoolTag}
                placeholder={"اسم المدرسة"}
              ></input>
            )}
            {typeChange(false, true) && (
              <div>{` عدد الطلاب المتبقي ${
                data[index].totalStudents -
                data[index].studentsNumber.reduce((total, num) => {
                  if (num === "لم يتم التحديد") {
                    return total + 0;
                  } else {
                    return total + parseInt(num);
                  }
                }, 0)
              } `}</div>
            )}
            <Select
              value={cityDepName}
              onChange={(selectedItem) => setCityDepName(selectedItem)}
              className={styles.addSchoolTag}
              placeholder={typeChange("المحافظة", "التخصص")}
              options={typeChange(schoolsOptions, depOptions)}
              styles={customStyles}
            ></Select>
            <input
              value={addressStudentsNumber}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleDataChange();
                }
                if (e.key == "Escape") {
                  setOpenAddPage(false);
                }
              }}
              type={typeChange("text", "number")}
              ref={(el) => {
                inputTagsRef.current.push(el);
              }}
              onChange={(e) => setAddressStudentsNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder={typeChange("العنوان", "عدد الطلاب")}
            ></input>
            <input
              value={studentsTeachersNumber}
              onKeyDown={(e) => (e.key == "Enter" ? handleDataChange() : "")}
              type="number"
              ref={(el) => {
                inputTagsRef.current.push(el);
              }}
              onChange={(e) => setStudentsTeachersNumber(e.target.value)}
              className={styles.addSchoolTag}
              placeholder={typeChange("عدد الطلاب", "عدد المدرسين")}
            ></input>
            <button
              type="button"
              onClick={() => {
                handleDataChange();
              }}
            >
              تأكيد
            </button>
          </form>
        )}
        {!swapContent && (
          <div>
            <form>
              <input type="file" onChange={handleFileChange}></input>
              
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default PopUpWindow;
