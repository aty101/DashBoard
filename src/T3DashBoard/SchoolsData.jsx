import { FaSearch } from "react-icons/fa";
import styles from "./styles/SchoolsData.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AddSchooleWindow from "./PopUpWindow";
import NavBar from "./NavBar";
import Select from "react-select";
import { citiesStyles, schoolsStyles } from "./styles/ReactSelectStyles";

function SchoolsData() {
  const cities = ["القاهرة", "القليوبية"];
  const [schoolNameFilter, setSchoolNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [openAddPage, setOpenAddPage] = useState(false);
  const [data, setData] = useState([
    {
      name: "خالد بن الوليد",
      address: 1,
      city: "القاهرة",
      departments: [],
      studentsNumber: 500,
    },
    {
      name: "حلمية الزيتون",
      address: 2,
      city: "القليوبية",
      departments: [],
      studentsNumber: 200,
    },
  ]);

  const citiesOptions = cities.map((ele) => {
    return {
      label: `${ele}`,
      value: `${ele}`,
    };
  });
  citiesOptions.push({
    label: "الكل",
    value: "الكل",
  });
  const schoolNamesOptions = data.map((ele) => {
    return {
      label: `${ele.name}`,
      value: `${ele.name}`,
    };
  });

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
                  placeholder="ابحث عن رقم المدرسة"
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
              className={`table  mb-0   mt-0 table-bordered ${styles.table}`}
            >
              <thead>
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
              <tbody>
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
                      <th scope="row">{key + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.studentsNumber}</td>
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
