import { PiPencilLineDuotone } from "react-icons/pi";
import TabelHeadCell from "./TableHeadCell";

function Table({ data, reference }) {
  return (
    <table
      ref={reference}
      dir="rtl"
      className="overflow-hidden rounded-t-lg table-auto mx-0 sm:mx-5 shadow-md print:mx-auto print:mt-36 print:w-[90%] "
    >
      <thead className="bg-sky-800 rounded-t-lg">
        <tr>
          <TabelHeadCell>الاسم</TabelHeadCell>
          <TabelHeadCell>اسم الكلية</TabelHeadCell>
          <TabelHeadCell>الحالة</TabelHeadCell>
          <TabelHeadCell>النظام</TabelHeadCell>
          <TabelHeadCell>الاجراءات</TabelHeadCell>
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
              <td className="data-cell">
                <button className="border border-sky-950 p-2 rounded-md shadow-sm">
                  <PiPencilLineDuotone />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
