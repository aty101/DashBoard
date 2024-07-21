import { useEffect, useState } from "react";
import RequestsFilter from "./components/RequestsFilter";
import styles from "./styles/ShTolab.module.css";
const initialRequests = [
  {
    studentName: "محمود احمد عبد الرحيم",
    studentId: "123",
    requestId: "1",
    request: "طلب اعادة تصحيح",
    requestStatus: "جديد",
    requestResult: "",
  },
  {
    studentName: "محمود احمد عبد الرحيم",
    studentId: "789",
    requestId: "2",
    request: "طلب اعادة تصحيح",
    requestStatus: "جديد",
    requestResult: "",
  },
  {
    studentName: "محمود احمد عبد الرحيم",
    studentId: "456",
    requestId: "3",
    request: "طلب اعادة تصحيح",
    requestStatus: "جديد",
  },
];
const ShTolab = () => {
  const [studentId, setStudentId] = useState("");
  const [requests, setRequests] = useState(initialRequests);
  const [status, setStatus] = useState("جديد");
  const formattedDate = new Date().toLocaleDateString();

  const handleFilter = (id, status) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.requestId === id
          ? { ...request, requestStatus: status }
          : request
      )
    );
  };
  return (
    <div className={` container-fluid ${styles.shContainer}`}>
      <h1>شؤون الطلاب</h1>
      <RequestsFilter
        id={studentId}
        setId={setStudentId}
        status={status}
        setStatus={setStatus}
      />
      {status === "جديد" && (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                اسم الطالب
              </th>
              <th scope="col" className="col-1">
                رقم الجلوس
              </th>
              <th scope="col" className="col-1">
                الرقم التعريفي للطلب
              </th>
              <th scope="col" className="col-1">
                الطلب
              </th>
              <th scope="col" className="col-1">
                حالة الطلب
              </th>
              <th scope="col" className="col-1">
                تحويل الطلب
              </th>
              <th scope="col" className="col-1">
                نتيجة الطلب
              </th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter(
                (request) =>
                  request.requestStatus === "جديد" &&
                  request.studentId.includes(studentId)
              )
              .map((request, index) => (
                <tr key={index}>
                  <td>{request.studentName}</td>
                  <td>{request.studentId}</td>
                  <td>{request.requestId}</td>
                  <td>{request.request}</td>
                  <td>{request.requestStatus}</td>
                  <td className={styles.requestRedirect}>
                    <input type="text" placeholder="الرقم التعريفي للموظف" />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        handleFilter(request.requestId, "قيد الانتظار")
                      }
                    >
                      تحويل
                    </button>
                  </td>
                  <td className={styles.requestResult}>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleFilter(request.requestId, "تمت")}
                    >
                      تم
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleFilter(request.requestId, "مرفوضة")}
                    >
                      رفض
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {status === "قيد الانتظار" && (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                اسم الطالب
              </th>
              <th scope="col" className="col-1">
                رقم الجلوس
              </th>
              <th scope="col" className="col-1">
                الرقم التعريفي للطلب
              </th>
              <th scope="col" className="col-1">
                الطلب
              </th>
              <th scope="col" className="col-1">
                حالة الطلب
              </th>
              <th scope="col" className="col-1">
                الموظف المحول اليه
              </th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter(
                (request) =>
                  request.requestStatus === "قيد الانتظار" &&
                  request.studentId.includes(studentId)
              )
              .map((request, index) => (
                <tr key={index}>
                  <td>{request.studentName}</td>
                  <td>{request.studentId}</td>
                  <td>{request.requestId}</td>
                  <td>{request.request}</td>
                  <td>{request.requestStatus}</td>
                  <td className={styles.requestRedirect}>
                    <p>موظف س</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {status === "تمت" && (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                اسم الطالب
              </th>
              <th scope="col" className="col-1">
                رقم الجلوس
              </th>
              <th scope="col" className="col-1">
                الرقم التعريفي للطلب
              </th>
              <th scope="col" className="col-1">
                الطلب
              </th>
              <th scope="col" className="col-1">
                حالة الطلب
              </th>
              <th scope="col" className="col-1">
                التاريخ
              </th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter(
                (request) =>
                  request.requestStatus === "تمت" &&
                  request.studentId.includes(studentId)
              )
              .map((request, index) => (
                <tr key={index}>
                  <td>{request.studentName}</td>
                  <td>{request.studentId}</td>
                  <td>{request.requestId}</td>
                  <td>{request.request}</td>
                  <td>{request.requestStatus}</td>
                  <td className={styles.requestRedirect}>{formattedDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {status === "مرفوضة" && (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                اسم الطالب
              </th>
              <th scope="col" className="col-1">
                رقم الجلوس
              </th>
              <th scope="col" className="col-1">
                الرقم التعريفي للطلب
              </th>
              <th scope="col" className="col-1">
                الطلب
              </th>
              <th scope="col" className="col-1">
                حالة الطلب
              </th>
              <th scope="col" className="col-1">
                التاريخ
              </th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter(
                (request) =>
                  request.requestStatus === "مرفوضة" &&
                  request.studentId.includes(studentId)
              )
              .map((request, index) => (
                <tr key={index}>
                  <td>{request.studentName}</td>
                  <td>{request.studentId}</td>
                  <td>{request.requestId}</td>
                  <td>{request.request}</td>
                  <td>{request.requestStatus}</td>
                  <td className={styles.requestRedirect}>{formattedDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShTolab;
