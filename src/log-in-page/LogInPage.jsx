import { useState } from "react";
import styles from "./LogInPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";


function LogInPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState();
  const [errorMessage2, setErrorMessage2] = useState();
  const navigate = useNavigate();


  function check() {
    // if (userName == "") {
    //   setErrorMessage1("هذا الحقل مطلوب");
    // } else {
    //   setErrorMessage1("");
    // }
    // if (userPassword == "") {
    //   setErrorMessage2("هذا الحقل مطلوب");
    //   return;
    // } else {
    //   setErrorMessage2("");
    // }
    navigate("home");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <form action="">
          <h1>مرحبا في جامعة الازهر</h1>
          <div className={styles.inputBox}>
            <input
              // required
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
              type="text"
              placeholder="اسم المستخدم"
            ></input>
            <FaUser className={styles.icon}></FaUser>
            <p className="errorBox">{errorMessage1}</p>
          </div>
          <div className={styles.inputBox}>
            <input
              // required
              value={userPassword}
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              placeholder="كلمة المرور"
            ></input>
            <FaLock className={styles.icon}></FaLock>
            <p className={styles.errorBox}>{errorMessage2}</p>
          </div>
          <div>
            <button type="button" onClick={check}>
              تسجيل دخول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogInPage;
