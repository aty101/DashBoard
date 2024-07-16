import { Link, useNavigate } from "react-router-dom";
import "./styles/SideBar.css";
import "bootstrap/dist/css/bootstrap.css";
const listItems = ["اضافة كتاب", "مراجعة طلب التحاق", "طلبات تم مراجعتها"];
function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="requestPage d-flex flex-column">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-around">
          <Link className="navButtons" to={"/requests"} replace>
            مراجعة طلبات الالتحاق
          </Link>
          <Link className="navButtons">طلبات تم مراجعتها</Link>

          <Link to={"/schools"} replace className="navButtons">
            المدارس المشاركة
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
