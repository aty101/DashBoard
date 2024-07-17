import SideBar from "./SideBar";
import { FaSearch } from "react-icons/fa";
import styles from "./styles/StudentsData.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

var requests = [
  {
    name: "مصطفى خالد محمود محمد",
    ID: 1,
    city: "القاهرة",
    collage: "أ",
  },
  {
    name: "محمود احمد عبد الرحيم",
    ID: 2,
    city: "القليوبية",
    collage: "ب",
  },
];

const cities = ["القاهرة", "القليوبية"];
const schools = ["أ", "ب"];

function StudentsData() {
  const [IDFilter, setIDFilter] = useState("");
  const [cityFilter, setCityFilter] = useState();
  const [collageFilter, setCollageFilter] = useState();
  return (
    <>
      <SideBar></SideBar>
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
              <select
                value={collageFilter}
                onChange={(e) => {
                  setCollageFilter(e.target.value);
                }}
                className={styles.collage}
              >
                <option value={""} selected disabled hidden>
                  المدرسة
                </option>
                <option value={"الكل"}>الكل</option>
                {schools.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="table mb-0">
            <table className="table table-striped mb-0   mt-0 table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    #
                  </th>
                  <th scope="col" className="text-center">
                    اسم الطالب
                  </th>
                  <th scope="col" className="text-center">
                    رقم الجلوس
                  </th>
                  <th scope="col" className="text-center">
                    المحافظة
                  </th>
                  <th scope="col" className="text-center">
                    المدرسة
                  </th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((item, key) => {
                  if (
                    (cityFilter != undefined &&
                      cityFilter != item.city &&
                      cityFilter != "الكل") ||
                    (collageFilter != undefined &&
                      collageFilter != item.collage &&
                      collageFilter != "الكل") ||
                    (IDFilter != "" && IDFilter != item.ID)
                  ) {
                    return;
                  }
                  return (
                    <tr>
                      <th scope="row">{key + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.ID}</td>
                      <td>{item.city}</td>
                      <td>{item.collage}</td>
                      <td className="text-center d-flex justify-content-around">
                        <div className={styles.acceptButton}>✔</div>
                        <div className={styles.rejectButton}>✖</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentsData;
