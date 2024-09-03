import { useRef, useState } from "react";
import Selector from "./components/Selector";
import Button from "./components/Button";
import Table from "./components/Table";
import { useCities } from "./dataHooks/useCities";
import { useSections } from "./dataHooks/useSections";
import { useGroups } from "./dataHooks/useGroups";
import { usePlaceData } from "./dataHooks/usePlaceData";
import { useStudentsData } from "./dataHooks/useStudentsData";
import { convertToPdf } from "./helper/pdf";
import { useReactToPrint } from "react-to-print";
function MainComp() {
  const [{ groupId, sectionId, cityId, placeId, stageId }, setState] = useState(
    { groupId: "", sectionId: "", cityId: "", placeId: "", stageId: "" }
  );
  const ref = useRef("");
  function handleSelect(name, selectedOption) {
    setState((prev) => ({ ...prev, [name]: selectedOption }));
  }

  const handleToPrint = useReactToPrint({
    content: () => ref.current,
  });

  const citiesOptions = useCities();
  const sectionOptions = useSections();
  const groupOptions = useGroups();
  const placeOptions = usePlaceData(
    cityId.value,
    sectionId.value,
    stageId.value
  );
  const filteredStudents = useStudentsData(
    placeId.value,
    sectionId.value,
    stageId.value,
    groupId.value
  );

  const stageOptions = [
    { label: "مرحلة ثالثة", value: 2 },
    { label: "مرحلة رابعة", value: 3 },
  ];
  return (
    <div className="w-full h-[100dvh]  bg-stone-600 py-8 px-4">
      <div className="bg-white w-full h-full py-6 px-3 bg flex flex-col gap-3 lg:gap-8">
        <div className="flex justify-start items-center flex-wrap gap-4 ">
          <Button func={() => convertToPdf(ref)}>تصدير ملف PDF</Button>
          <Button func={handleToPrint}>طباعة</Button>
        </div>
        <form className="flex flex-wrap items-center ">
          <Selector
            val={cityId}
            options={citiesOptions}
            setter={(e) => handleSelect("cityId", e)}
            label={"تصفية حسب المنطقة"}
          ></Selector>
          <Selector
            val={sectionId}
            options={sectionOptions}
            setter={(e) => handleSelect("sectionId", e)}
            label={" تصفية حسب القسم"}
          ></Selector>
          <Selector
            val={stageId}
            options={stageOptions}
            setter={(e) => handleSelect("stageId", e)}
            label={"تصفية حسب المرحلة"}
          ></Selector>

          {
            <Selector
              val={placeId}
              options={placeOptions}
              setter={(e) => handleSelect("placeId", e)}
              label={"تصفية حسب المكان"}
              disabled={!(!!stageId && !!cityId && !!sectionId)}
            ></Selector>
          }
          <Selector
            val={groupId}
            options={groupOptions}
            setter={(e) => handleSelect("groupId", e)}
            label={"تصفية حسب المجموعة"}
          ></Selector>
        </form>
        {!!filteredStudents && filteredStudents.length !== 0 ? (
          <Table reference={ref} data={filteredStudents}></Table>
        ) : null}
      </div>
    </div>
  );
}

export default MainComp;
