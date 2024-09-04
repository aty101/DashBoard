import { convertToPdf } from "../helper/pdf";
import { useReactToPrint } from "react-to-print";
import Button from "./Button";

function Print({ reference, filteredStudents }) {
  const handleToPrint = useReactToPrint({
    content: () => reference?.current,
  });
  return (
    <div className="flex justify-start items-center flex-wrap gap-4 ">
      <Button
        disabled={!!filteredStudents && filteredStudents?.length !== 0}
        func={() => convertToPdf(reference)}
      >
        تصدير ملف PDF
      </Button>
      <Button
        disabled={!!filteredStudents && filteredStudents?.length !== 0}
        func={handleToPrint}
      >
        طباعة
      </Button>
    </div>
  );
}

export default Print;
