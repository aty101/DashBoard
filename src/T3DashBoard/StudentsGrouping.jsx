import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import styles from "./styles/StudentsGrouping.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import PopUpWindow from "./PopUpWindow";

const cities = ["القاهرة", "القليوبية", "الاسكندرية"];

function StudentsData() {
  const [IDFilter, setIDFilter] = useState("");
  const [cityFilter, setCityFilter] = useState();
  const [openPopUpWindow, setOpenPopUpWindow] = useState(false);
  const [index, setIndex] = useState();
  const [data, setData] = useState([
    {
      name: "أ",
      ID: 1,
      city: "القاهرة",
      departments: ["1", "2", "3"],
      studentsNumber: ["20", "80", "90"],
      teachersNumber: ["20", "80", "90"],
      totalStudents: 190,
      totalTeachers: 190,
    },
    {
      name: "ب",
      ID: 2,
      city: "القليوبية",
      departments: ["1", "2", "3"],
      studentsNumber: ["20", "80", "90"],
      teachersNumber: ["20", "80", "90"],
      totalStudents: 190,
      totalTeachers: 190,
    },
    {
      name: "ث",
      ID: 3,
      city: "الاسكندرية",
      departments: ["1", "2", "3"],
      studentsNumber: [],
      teachersNumber: [],
      totalStudents: 190,
      totalTeachers: 190,
    },
  ]);
  const openClosePage = () => {
    
    setOpenPopUpWindow(!openPopUpWindow);
  };
  const getData = () => {
    return data;
  };
  const addData = (arr) => {
    setData(arr);
  };
  const openPage = (i) => {

    openClosePage();
    setIndex(i);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className={`${styles.requestPage} d-flex flex-column`}>
        <div
          className={`d-flex flex-column justify-content-center mb-2 mt-2  ${styles.body}`}
        >
          <div
            className={`navbar navbar-expand-lg bg-body-tertiary container-fluid ${styles.filters}`}
          >
            <div className="container-fluid d-flex justify-content-around">
              <div className={`${styles.searchBox} d-flex  align-items-center`}>
                <input
                  value={IDFilter}
                  onChange={(e) => setIDFilter(e.target.value)}
                  type="text"
                  className={styles.search}
                  placeholder="ابحث عن رقم الجلوس"
                ></input>
                <FaSearch className={styles.icon}></FaSearch>
              </div>
              <select
                value={cityFilter}
                onChange={(e) => {
                  setCityFilter(e.target.value);
                }}
                className={styles.city}
              >
                <option value={""} selected disabled hidden>
                  المحافظة
                </option>
                <option value={"الكل"}>الكل</option>
                {cities.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="table mb-0">
            <table className="table  mb-0   mt-0 table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    #
                  </th>
                  <th scope="col" className="text-center">
                    اسم المدرسة
                  </th>
                  <th scope="col" className="text-center">
                    رقم المدرسة
                  </th>
                  <th scope="col" className="text-center">
                    المحافظة
                  </th>
                  <th scope="col" className="text-center">
                    التخصصات
                  </th>
                  <th scope="col" className="text-center">
                    عدد الطلاب
                  </th>
                  <th scope="col" className="text-center">
                    عدد المدرسين
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {data.map((item, key) => {
                  if (
                    (cityFilter != undefined &&
                      cityFilter != item.city &&
                      cityFilter != "الكل") ||
                    (IDFilter != "" && IDFilter != item.ID)
                  ) {
                    return;
                  }
                  return (
                    <>
                      <tr onClick={()=>openPage(key)}>
                        <th scope="row" className="text-center">
                          {key + 1}
                        </th>
                        <td className="text-center align-middle">
                          {item.name}
                        </td>
                        <td className="text-center align-middle">{item.ID}</td>
                        <td className="text-center align-middle">
                          {item.city}
                        </td>
                        <td className="text-center align-middle">
                          {item.departments.map((e) => {
                            return (
                              <div className={styles.depNumTableCells}>{e}</div>
                            );
                          })}
                        </td>

                        <td className="text-center align-middle">
                          {item.studentsNumber.length != 0
                            ? item.studentsNumber.map((e) => {
                                return (
                                  <div className={styles.depNumTableCells}>
                                    {e}
                                  </div>
                                );
                              })
                            : item.totalStudents}
                        </td>

                        <td className="text-center align-middle">
                          {item.teachersNumber.length != 0
                            ? item.teachersNumber.map((e) => {
                                return (
                                  <div className={styles.depNumTableCells}>
                                    {e}
                                  </div>
                                );
                              })
                            : item.totalTeachers}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openPopUpWindow && (
        <PopUpWindow
          type={"addGroups"}
          setOpenAddPage={openClosePage}
          getData={getData}
          addData={addData}
          index={index}
        ></PopUpWindow>
      )}
    </>
  );
}
export default StudentsData;
