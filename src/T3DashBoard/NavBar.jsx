import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.requestPage} d-flex flex-column`}>
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-around">
          <Link to={"/schools"} replace className={styles.navButtons}>
            المدارس المشاركة
          </Link>
          <Link className={styles.navButtons} to={"/groups"} replace>
            تحديد عدد طلاب و معلمين الأقسام
          </Link>
          

        </div>
      </div>
    </div>
  );
}
export default NavBar;
