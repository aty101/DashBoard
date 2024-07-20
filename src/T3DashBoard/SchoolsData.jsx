import SideBar from "./NavBar";
import { FaPlus, FaSearch } from "react-icons/fa";
import styles from "./styles/SchoolsData.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AddSchooleWindow from "./PopUpWindow";
import NavBar from "./NavBar";

function SchoolsData() {
  const cities = ["القاهرة", "القليوبية"];
  const [IDFilter, setIDFilter] = useState("");
  const [cityFilter, setCityFilter] = useState();
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
  const getData = () => {
    return data;
  };

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
                    (cityFilter != undefined &&
                      cityFilter != item.city &&
                      cityFilter != "الكل") ||
                    (IDFilter != "" && IDFilter != item.address)
                  )
                    return;
                  return (
                    <tr>
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
