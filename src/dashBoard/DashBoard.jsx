import SideBar from "./SideBar";
import { FaSearch } from "react-icons/fa";
import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.css";
var requests = [
  {
    name: "aty",
    city: "القاهرة",
    collage: "حاسبات",
  },
];

function DashBoard() {
  return (
    <div className="requestPage d-flex flex-row">
      <SideBar></SideBar>

      <div className="d-flex flex-column justify-content-center mb-2 mt-2 body me-4">
        <div className="navbar navbar-expand-lg bg-body-tertiary filters me-5">
          <div className="container-fluid d-flex justify-content-around">
            <div className="searchBox">
              <input
                type="text"
                className="search"
                placeholder="ابحث...."
              ></input>
              <FaSearch className="icon"></FaSearch>
            </div>
            <select className="city">
              <option value={""} selected disabled hidden>
                المحافظة
              </option>
            </select>
            <select className="collage">
              <option value={""} selected disabled hidden>
                الكلية
              </option>
            </select>
          </div>
        </div>
        <div className="table ">
          <table className="table table-striped  mt-5 table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">اسم الطالب</th>
                <th scope="col">المحافظة</th>
                <th scope="col">الكلية</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((item, key) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.collage}</td>
                    <td className="text-center">
                      {" "}
                      <div></div>
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
export default DashBoard;
