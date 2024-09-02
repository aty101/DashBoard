import { PiPencilLineDuotone } from "react-icons/pi";
import Th from "./Th";

function Table({ data }) {
  return (
    <table className="overflow-hidden rounded-t-lg table-auto mx-0 sm:mx-5 shadow-md">
      <thead className="bg-sky-800 rounded-t-lg">
        <tr>
          <Th>الاسم</Th>
          <Th>اسم الكلية</Th>
          <Th>الحالة</Th>
          <Th>النظام</Th>
          <Th>الاجراءات</Th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, key) => {
          return (
            <tr key={key}>
              <td className="data-cell">{item.studentsName}</td>
              <td className="data-cell">{item.facultyName}</td>
              <td className="data-cell">{item.statusName}</td>
              <td className="data-cell">{item.regular}</td>
              <td className="data-cell"><button className="border border-sky-950 p-2 rounded-md shadow-sm"><PiPencilLineDuotone /></button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
