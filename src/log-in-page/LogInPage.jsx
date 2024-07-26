import { useRef, useState } from "react";
import styles from "./LogInPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState(false);
  const [errorMessage2, setErrorMessage2] = useState(false);
  const [error1Show, setError1Show] = useState(false);
  const [error2Show, setError2Show] = useState(false);
  const navigate = useNavigate();

  function check() {
    let errorFlag = false;
    if (userName === "") {
      setErrorMessage1("هذا الحقل مطلوب");
      setError1Show(true);
      errorFlag = true;
    } else {
      setErrorMessage1("");
      setError1Show(false);
    }
    if (userPassword === "") {
      setErrorMessage2("هذا الحقل مطلوب");
      setError2Show(true);
      errorFlag = true;
    } else {
      setErrorMessage2("");
      setError2Show(false);
    }
    if (!errorFlag) {
      navigate("/home");
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <form action="">
          <h2>مرحبا في جامعة الازهر</h2>
          <div
            className={styles.inputBox}
            style={{ borderColor: error1Show ? "red" : "black" }}
          >
            <input
              // required
              value={userName}
              onChange={(e) => {
                setUserName(e.currentTarget.value);
                setError1Show(false);
                setErrorMessage1(false);
              }}
              type="text"
              placeholder="اسم المستخدم"
            ></input>
            <FaUser className={styles.icon}></FaUser>
            <p className={styles.errorBox}>{errorMessage1}</p>
          </div>
          <div
            className={styles.inputBox}
            style={{ borderColor: error2Show ? "red" : "black" }}
          >
            <input
              // required
              value={userPassword}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                setError2Show(false);
                setErrorMessage2(false);
              }}
              type="password"
              placeholder="كلمة المرور"
            ></input>
            <FaLock className={styles.icon}></FaLock>
            <p className={styles.errorBox}>{errorMessage2}</p>
          </div>
          <div>
            <button className={styles.logInBtn} type="button" onClick={check}>
              تسجيل دخول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogInPage;
