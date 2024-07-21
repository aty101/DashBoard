import styles from "../styles/RequestsFilter.module.css";
import Select from "react-select";

const options = [
  { value: "جديد", label: "جديد" },
  { value: "قيد الانتظار", label: "قيد الانتظار" },
  { value: "تمت", label: "تمت" },
  { value: "مرفوضة", label: "مرفوضة" },
];

const RequestsFilter = ({ id, setId, status, setStatus, }) => {
  return (
    <div className={styles.requestFilterContainer}>
      <input
        type="text"
        placeholder="رقم جلوس الطالب"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      {/* <button type="button" className="btn btn-primary">بحث</button> */}
      <Select
        options={options}
        value={options.filter((option) => option.value === status)}
        onChange={(e) => setStatus(e.value)}
        placeholder="حالة الطلب"
      />
    </div>
  );
};

export default RequestsFilter;
