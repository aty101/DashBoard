/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Select from "react-select";
import styles from "../styles/PopUpWindow.module.css";
import { useEffect, useRef, useState } from "react";
import ReadExcel from "./ReadExcelFile";
import { popUpStyles } from "../styles/ReactSelectStyles";
function PopUpWindow({ type, setOpenAddPage, addData, getData, index }) {
  const data = getData();

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

  const [schoolName, setSchoolName] = useState("");
  const [cityDepName, setCityDepName] = useState("");
  const [addressStudentsNumber, setAddressStudentsNumber] = useState("");
  const [studentsTeachersNumber, setStudentsTeachersNumber] = useState("");
  const [swapContent, setSwapContent] = useState(true);
  const [dataStatus, setDataStatus] = useState(false);
  const [dataStatusMessage, setDataStatusMessage] = useState("");

  useEffect(()=>{
    if (dataStatus) {
      const timer = setTimeout(() => {
        setDataStatus(false);
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  },[dataStatus])

  const handleDataChange = () => {
    if (type != "addSchool") {
      {
        const studentsCalc = data[index].totalStudents - addressStudentsNumber;
        const teachersCalc = data[index].totalTeachers - studentsTeachersNumber;
        if (
          studentsCalc >= 0 &&
          teachersCalc >= 0 &&
          cityDepName != "" &&
          cityDepName != undefined
        ) {
          if (
            addressStudentsNumber != undefined &&
            addressStudentsNumber != ""
          ) {
            data[index].studentsNumber[cityDepName.value] =
              addressStudentsNumber;
          }else{
            data[index].studentsNumber[cityDepName.value] =
              "لم يتم التحديد";
          }
          if (
            studentsTeachersNumber != undefined &&
            studentsTeachersNumber != ""
          ) {
            data[index].teachersNumber[cityDepName.value] =
            studentsTeachersNumber;
          }else{
            data[index].teachersNumber[cityDepName.value] =
              "لم يتم التحديد";
          }
          
          addData(data);
          setSchoolName("");
          setCityDepName("");
          setAddressStudentsNumber("");
          setStudentsTeachersNumber("");
          setDataStatus(true);
          setDataStatusMessage(`تمت العملية بنجاح ✔`) - addressStudentsNumber;
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
        city: cityDepName.value,
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
              اضافة مجموعة
            </div>
          </nav>
        )}
        {swapContent && (
          <form
            className={`d-flex  flex-column justify-content-around align-items-center ${styles.form}`}
          >
            {typeChange(true, false) && (
              <div className={styles.addSchoolBox}>
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
              </div>
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
            <div className={styles.addSchoolBox}>
              <Select
                menuPortalTarget={document.body}
                value={cityDepName}
                onChange={(selectedItem) => setCityDepName(selectedItem)}
                className={styles.addSchoolTag}
                placeholder={typeChange("المحافظة", "التخصص")}
                options={typeChange(schoolsOptions, depOptions)}
                styles={popUpStyles}
              ></Select>
            </div>
            <div className={styles.addSchoolBox}>
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
            </div>
            <div className={styles.addSchoolBox}>
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
            </div>
            <button
              className={styles.addBtn}
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
            <ReadExcel></ReadExcel>
          </div>
        )}
      </div>
      {dataStatus && (
        <div className={styles.dataStatus}>{dataStatusMessage}</div>
      )}
    </div>
  );
}
export default PopUpWindow;
