import { convertToPdf } from "../helper/pdf";
import { useReactToPrint } from "react-to-print";
import Button from "./Button";

function Print({ reference, filteredStudents, mode }) {
  const handleToPrint = useReactToPrint({
    content: () => reference?.current,
  });
  return (
    <div className="flex justify-self-start] items-center flex-wrap gap-4 ">
      <Button
        disabled={!!filteredStudents && filteredStudents?.length !== 0}
        func={() => convertToPdf(reference)}
      >
        {mode ? "تصدير ملف PDF" : "Export PDF file"}
      </Button>
      <Button
        disabled={!!filteredStudents && filteredStudents?.length !== 0}
        func={handleToPrint}
      >
        {mode ? "طباعة" : "Print"}
      </Button>
    </div>
  );
}

export default Print;
