import { FaSearch } from "react-icons/fa";
import styles from "../styles/StudentsGrouping.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import PopUpWindow from "./PopUpWindow";
import NavBar from "./NavBar";
import  {
  citiesOptions,
  cities,
  schoolNamesOptions,
  schoolsData,
} from "../data/data";
import Select from "react-select";
import { citiesStyles, schoolsStyles } from "../styles/ReactSelectStyles";

function StudentsGrouping() {
  const [nameFilter, setNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [openPopUpWindow, setOpenPopUpWindow] = useState(false);
  const [index, setIndex] = useState();
  const [data, setData] = useState(schoolsData);
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
                <Select
                  styles={schoolsStyles}
                  value={nameFilter}
                  options={schoolNamesOptions}
                  onInputChange={(val) => {
                    
                    setNameFilter({
                      label: val,
                      value: val,
                    });
                  }}
                  onChange={(e) => setNameFilter(e)}
                  type="text"
                  className={styles.search}
                  placeholder="ابحث بإستخدام اسم المدرسة"
                  menuPortalTarget={document.body}
                ></Select>
                <FaSearch className={styles.icon}></FaSearch>
              </div>
              <Select
                menuPortalTarget={document.body}
                styles={citiesStyles}
                placeholder="المحافظة"
                options={citiesOptions}
                value={cityFilter}
                onChange={(e) => {
                  setCityFilter(e);
                }}
                className={styles.cities}
              >
                <option value={""} selected disabled hidden>
                  المحافظة
                </option>
                <option value={"الكل"}>الكل</option>
                {cities.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
            </div>
          </div>
          <div className="table mb-0">
            <table className={`table  mb-0   mt-0  `}>
              <thead className={styles.tableHead}>
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
                    (cityFilter.value != undefined &&
                      cityFilter.value != "" &&
                      cityFilter.value != item.city &&
                      cityFilter.value != "الكل") ||
                    (nameFilter.value != "" && nameFilter.value != undefined && nameFilter.value != item.name)
                  ) {
                    return;
                  }
                  return (
                    <>
                      <tr onClick={() => openPage(key)}>
                        <th scope="row" className="text-center align-middle">
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
export default StudentsGrouping;
