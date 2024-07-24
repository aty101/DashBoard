import { Link, useLocation } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={styles.body}>
        
        <Link style={{background:location.pathname=="/schools"? "#e0e9f0": "white"}} to={"/schools"} replace className={styles.navButtons}>
          المدارس المشاركة
        </Link>
        <Link  style={{background:location.pathname=="/groups"? "#e0e9f0": "white"}} className={styles.navButtons} to={"/groups"} replace>
          تحديد عدد طلاب و معلمين الأقسام
        </Link>
       
      </div>
    </div>
  );
}
export default NavBar;
