/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Select from "react-select";
import styles from "../styles/PopUpWindow.module.css";
import { useEffect, useRef, useState } from "react";
import ReadExcel from "./ReadExcelFile";
import { popUpStyles } from "../styles/ReactSelectStyles";
function PopUpWindow({ type, setOpenAddPage, addData, getData, index }) {
  const data = getData();

  const schools = [
    { value: "القاهرة", label: "القاهرة" },
    { value: "القليوبية", label: "القليوبية" },
  ];
  const departments = [
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
  const [dataStatusIcon, setDataStatusIcon] = useState("");

  useEffect(() => {
    if (dataStatus) {
      const timer = setTimeout(() => {
        setDataStatus(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [dataStatus]);

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
          }
          // else if( data[index].studentsNumber[cityDepName.value] != "لم يتم التحديد"){
          //   data[index].studentsNumber[cityDepName.value] = "لم يتم التحديد";
          // }
          if (
            studentsTeachersNumber != undefined &&
            studentsTeachersNumber != ""
          ) {
            data[index].teachersNumber[cityDepName.value] =
              studentsTeachersNumber;
          }
          // else if(data[index].teachersNumber[cityDepName.value] != "لم يتم التحديد"){
          //   data[index].teachersNumber[cityDepName.value] = "لم يتم التحديد";
          // }

          addData(data);
          setSchoolName("");
          setCityDepName("");
          setAddressStudentsNumber("");
          setStudentsTeachersNumber("");
          setDataStatus(true);
          setDataStatusMessage(`تمت الإضافة بنجاح `);
          setDataStatusIcon("✔");
          inputTagsRef.current.forEach((v, index) => {
            inputTagsRef.current[index].value = "";
          });
        } else {
          setDataStatus(true);
          setDataStatusMessage("برجاء التأكد من ملئ جميع الحقول");
          setDataStatusIcon("✖");
        }
      }
    } else {
      if (
        schoolName != "" &&
        cityDepName != "" &&
        addressStudentsNumber != "" &&
        studentsTeachersNumber != ""
      ) {
        data.push({
          name: schoolName,
          ID: 2,
          address: addressStudentsNumber,
          city: cityDepName.value,
          departments: ["1", "2", "3"],
          studentsNumber: [
            "لم يتم التحديد",
            "لم يتم التحديد",
            "لم يتم التحديد",
          ],
          teachersNumber: [
            "لم يتم التحديد",
            "لم يتم التحديد",
            "لم يتم التحديد",
          ],
          totalStudents: studentsTeachersNumber,
          totalTeachers: 190,
        });

        addData(data);
        setSchoolName("");
        setCityDepName("");
        setAddressStudentsNumber("");
        setStudentsTeachersNumber("");
        setDataStatus(true);
        setDataStatusMessage("تمت الإضافة بنجاح");
        setDataStatusIcon("✔");
        inputTagsRef.current.forEach((v, index) => {
          inputTagsRef.current[index].value = "";
        });
      } else {
        setDataStatus(true);
        setDataStatusMessage("برجاء التأكد من ملئ جميع الحقول");
        setDataStatusIcon("✖");
      }
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
              <div className={styles.remainingBox}>{` عدد الطلاب المتبقي ${
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
            {typeChange(false, true) && (
              <div className={styles.remainingBox}>{` عدد المدرسين المتبقي ${
                data[index].totalTeachers -
                data[index].teachersNumber.reduce((total, num) => {
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
                value={cityDepName}
                onChange={(selectedItem) => setCityDepName(selectedItem)}
                className={styles.addSchoolTag}
                placeholder={typeChange("المحافظة", "التخصص")}
                options={typeChange(schools, departments)}
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
        <div
          style={{ height: dataStatus ? "11vh" : "0" }}
          className={styles.dataStatus}
        >
          <span className={`${styles.dataStatusMessage}`}>
            {dataStatusMessage}
          </span>
          <span
            style={{
              backgroundColor: dataStatusIcon == "✔" ? "#00a100" : "red",
            }}
            className={`${styles.dataStatusMessage} ${styles.dataStatusMessageIcon}`}
          >
            {dataStatusIcon}
          </span>
        </div>
      )}
    </div>
  );
}
export default PopUpWindow;
