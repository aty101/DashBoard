import { Link, useNavigate } from "react-router-dom";
import styles from  "./styles/SideBar.module.css";
import "bootstrap/dist/css/bootstrap.css";
const listItems = ["اضافة كتاب", "مراجعة طلب التحاق", "طلبات تم مراجعتها"];
function SideBar() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.requestPage} d-flex flex-column`}>
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-around">
          <Link className={styles.navButtons} to={"/requests"} replace>
            مراجعة طلبات الالتحاق
          </Link>
          <Link className={styles.navButtons}>طلبات تم مراجعتها</Link>

          <Link to={"/schools"} replace className={styles.navButtons}>
            المدارس المشاركة
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
