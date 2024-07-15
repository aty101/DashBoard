import SideBar from "./SideBar";
import { FaSearch } from "react-icons/fa";
import "./StudentsData.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

var requests = [
  {
    name: "مصطفى خالد محمود محمد",
    city: "القاهرة",
    collage: "حاسبات",
  },
  {
    name: "محمود احمد عبد الرحيم",
    city: "القليوبية",
    collage: "حاسبات",
  },
];

const cities = ["القليوبية", "القاهرة"];

function StudentsData() {
  const [nameFilter, setNameFilter] = useState();
  const [cityFilter, setCityFilter] = useState();
  const [collageFilter, setCollageFilter] = useState();
  return (
    <div className="requestPage d-flex flex-column">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-around">
          <div className="navButtons">مراجعة طلبات الالتحاق</div>
          <div className="navButtons">طلبات تم مراجعتها</div>
          <div className="navButtons">اضافة كتاب</div>
          <div className="navButtons">المدارس المشاركة</div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center mb-2 mt-2 body ">
        <div className="navbar navbar-expand-lg bg-body-tertiary container-fluid filters ">
          <div className="container-fluid d-flex justify-content-around">
            <div className="searchBox d-flex align-items-center">
              <input
                type="text"
                className="search"
                placeholder="ابحث عن اسم"
              ></input>
              <FaSearch className="icon"></FaSearch>
            </div>
            <select
              value={cityFilter}
              onChange={(e) => {
                setCityFilter(e.target.value);
              }}
              className="city"
            >
              <option value={""} selected disabled hidden>
                المحافظة
              </option>
              {cities.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <select className="collage">
              <option value={""} selected disabled hidden>
                المدرسة
              </option>
            </select>
          </div>
        </div>
        <div className="table mb-0">
          <table className="table table-striped mb-0  mt-0 table-bordered">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  اسم الطالب
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
                if(cityFilter!= undefined && cityFilter == item.city)
                  return;
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.collage}</td>
                    <td className="text-center d-flex justify-content-around">
                      <div className="acceptButton">✔</div>
                      <div className="rejectButton">✖</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StudentsData;
