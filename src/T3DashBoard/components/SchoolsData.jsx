import { FaSearch } from "react-icons/fa";
import styles from "../styles/SchoolsData.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AddSchooleWindow from "./PopUpWindow";
import NavBar from "./NavBar";
import Select from "react-select";
import { citiesStyles, schoolsStyles } from "../styles/ReactSelectStyles";
import  {citiesOptions, schoolNamesOptions, schoolsData } from "../data/data";

function SchoolsData() {
  
  const [schoolNameFilter, setSchoolNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [openAddPage, setOpenAddPage] = useState(false);
  const [data, setData] = useState(schoolsData);

  

  const getData = () => {
    return data;
  };

  return (
    <>
      {/* Nav Bar */}
      <NavBar></NavBar>

      <div className={`${styles.requestPage} d-flex flex-column`}>
        <div
          className={`d-flex flex-column justify-content-center mb-2 mt-2 ${styles.body}`}
        >
          <div
            className={`navbar navbar-expand-lg bg-body-tertiary container-fluid  ${styles.filters} `}
          >
            <div className="container-fluid d-flex justify-content-around">
              <div className={`${styles.searchBox} d-flex  align-items-center`}>
                <Select
                  options={schoolNamesOptions}
                  value={schoolNameFilter}
                  onInputChange={(val) => {
                    
                    setSchoolNameFilter({
                      label: val,
                      value: val,
                    });
                  }}
                  onChange={(e) => {
                    setSchoolNameFilter(e);
                  }}
                  type="text"
                  className={styles.search}
                  placeholder="ابحث باستخدام اسم المدرسة"
                  styles={schoolsStyles}
                  menuPortalTarget={document.body}
                ></Select>
                <FaSearch className={styles.icon}></FaSearch>
              </div>
              <Select
                value={cityFilter}
                menuPortalTarget={document.body}
                styles={citiesStyles}
                placeholder="المحافظة"
                options={citiesOptions}
                onChange={(e) => {
                  setCityFilter(e);
                }}
                className={styles.city}
              ></Select>
              <div
                onClick={() => setOpenAddPage(true)}
                className={styles.addButton}
              >
                اضافة مدرسة
              </div>
            </div>
          </div>
          <div className="table mb-0">
            <table
              className={`table  mb-0   mt-0  `}
            >
              <thead className={styles.thead}>
                <tr>
                  <th scope="col" className="text-center">
                    #
                  </th>
                  <th scope="col" className="text-center">
                    اسم المدرسة
                  </th>
                  <th scope="col" className="text-center">
                    العنوان
                  </th>
                  <th scope="col" className="text-center">
                    المحافظة
                  </th>
                  <th scope="col" className="text-center">
                    عدد الطلاب
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {data.map((item, key) => {
                  if (
                    (cityFilter.value != undefined &&
                      cityFilter.value != item.city &&
                      cityFilter.value != "الكل" &&
                      cityFilter.value != "") ||
                    (schoolNameFilter.value != "" &&
                      schoolNameFilter.value != item.name &&
                      schoolNameFilter.value != "الكل" &&
                      schoolNameFilter.value != undefined)
                  )
                    return;
                  return (
                    <tr key={key}>
                      <th className="text-center align-middle" scope="row">{key + 1}</th>
                      <td className="text-center align-middle">{item.name}</td>
                      <td className="text-center align-middle">{item.address}</td>
                      <td className="text-center align-middle">{item.city}</td>
                      <td className="text-center align-middle">{item.totalStudents}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openAddPage && (
        <AddSchooleWindow
          setOpenAddPage={setOpenAddPage}
          addData={setData}
          type={"addSchool"}
          getData={getData}
        />
      )}
    </>
  );
}
export default SchoolsData;
