import SideBar from "./NavBar";
import { FaPlus, FaSearch } from "react-icons/fa";
import styles from "./styles/SchoolsData.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AddSchooleWindow from "./PopUpWindow";
import NavBar from "./NavBar";

var schools = [
  {
    name: "خالد بن الوليد",
    schoolNumber: 1,
    city: "القاهرة",
    studentsNumber: 500,
  },
  {
    name: "حلمية الزيتون",
    schoolNumber: 2,
    city: "القليوبية",
    studentsNumber: 200,
  },
];

const cities = ["القاهرة", "القليوبية"];

function SchoolsData() {
  const [IDFilter, setIDFilter] = useState("");
  const [cityFilter, setCityFilter] = useState();
  const [openAddPage, setOpenAddPage] = useState(false);

  return (
    <>
      {/* Nav Bar */}
      <NavBar></NavBar>

      <div className={`"${styles.requestPage} d-flex flex-column"`}>
        <div
          className={`d-flex flex-column justify-content-center mb-2 mt-2 ${styles.body}`}
        >
          <div
            className={`navbar navbar-expand-lg bg-body-tertiary container-fluid ${styles.filters} `}
          >
            <div className="container-fluid d-flex justify-content-around">
              <div className={`${styles.searchBox} d-flex  align-items-center`}>
                <input
                  value={IDFilter}
                  onChange={(e) => setIDFilter(e.target.value)}
                  type="text"
                  className={styles.search}
                  placeholder="ابحث عن رقم المدرسة"
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
              <div
                onClick={() => setOpenAddPage(true)}
                className={styles.addButton}
              >
                اضافة مدرسة
              </div>
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
                    عدد الطلاب
                  </th>
                </tr>
              </thead>
              <tbody>
                {schools.map((item, key) => {
                  if (
                    (cityFilter != undefined &&
                      cityFilter != item.city &&
                      cityFilter != "الكل") ||
                    (IDFilter != "" && IDFilter != item.schoolNumber)
                  )
                    return;
                  return (
                    <tr>
                      <th scope="row">{key + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.schoolNumber}</td>
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
      {openAddPage && <AddSchooleWindow setOpenAddPage={setOpenAddPage} type={"addSchool"} />}
    </>
  );
}
export default SchoolsData;
