import { useState } from "react";
import "./LogInPage.css";
import { FaUser, FaLock } from "react-icons/fa";

function LogInPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState();
  const [errorMessage2, setErrorMessage2] = useState();

  function check() {
    if (userName == "") {
      setErrorMessage1("هذا الحقل مطلوب");
    } else {
      setErrorMessage1("");
    }
    if (userPassword == "") {
      setErrorMessage2("هذا الحقل مطلوب");
    } else {
      setErrorMessage2("");
    }
  }

  return (
    <div className="wrapper">
      <form action="">
        <h1>مرحبا في جامعة الازهر</h1>
        <div className="input-box">
          <input
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
            type="text"
            placeholder="اسم المستخدم"
          ></input>
          <FaUser className="icon"></FaUser>
          <p className="errorBox">{errorMessage1}</p>
        </div>

        <div className="input-box">
          <input
            value={userPassword}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            placeholder="كلمة المرور"
          ></input>
          <FaLock className="icon"></FaLock>
          <p className="errorBox">{errorMessage2}</p>
        </div>
        <div>
          <button type="button" onClick={check}>
            تسجيل دخول
          </button>
        </div>
      </form>
    </div>
  );
}
export default LogInPage;
