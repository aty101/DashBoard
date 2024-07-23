import { Link } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={styles.body}>
        <Link to={"/home"} replace className={styles.navButtons}>
          الصفحة الرئيسية
        </Link>
        <Link to={"/schools"} replace className={styles.navButtons}>
          المدارس المشاركة
        </Link>
        <Link className={styles.navButtons} to={"/groups"} replace>
          تحديد عدد طلاب و معلمين الأقسام
        </Link>
        <img src="D:\DashBoard\src\T3DashBoard\assets\azharIcon.svg"></img>
      </div>
    </div>
  );
}
export default NavBar;
