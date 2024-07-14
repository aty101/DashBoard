import { useState } from "react";
import "./LogInPage.css";
import { FaUser, FaLock } from "react-icons/fa";

function LogInPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  return (
    <div className="wrapper">
      <form action="">
        <h1>مرحبا في جامعة الازهر</h1>
        <select>
            <option></option>
        </select>
        <div className="input-box">
          <input
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
            type="text"
            placeholder="اسم المستخدم"
          ></input>

          <FaUser className="icon"></FaUser>
        </div>

        <div className="input-box">
          <input
            value={userPassword}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            placeholder="كلمة المرور"
          ></input>

          <FaLock className="icon"></FaLock>
        </div>
        <div>
          <button type="button" onClick={() => console.log(userPassword)}>
            تسجيل دخول
          </button>
        </div>
      </form>
    </div>
  );
}
export default LogInPage;
