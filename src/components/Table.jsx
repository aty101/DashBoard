import Th from "./Th";

function Table({data}) {
  return (
    <table className="overflow-hidden rounded-t-lg ">
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
        {data?.map((item,key)=>{
            return <tr key={key}>
                <td>{item.name}</td>
                <td>{item.collageName}</td>
                <td>{item.status}</td>
                <td>{item.sys}</td>
                <td>{item.actions}</td>
            </tr>
        })}
      </tbody>
    </table>
  );
}

export default Table;
