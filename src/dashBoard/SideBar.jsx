import "./SideBar.css";
import 'bootstrap/dist/css/bootstrap.css'
const listItems = ["اضافة كتاب", "مراجعة طلب التحاق", "طلبات تم مراجعتها"];
function SideBar() {
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
    </div>
  );
}
export default SideBar;
