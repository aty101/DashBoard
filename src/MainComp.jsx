import { useState } from "react";
import Selector from "./components/Selector";
import Button from "./components/Button";
import Table from "./components/Table";
import { useCities } from "./dataHooks/useCities";
import { useSections } from "./dataHooks/useSections";
import { useGroups } from "./dataHooks/useGroups";
import { usePlaceData } from "./dataHooks/usePlaceData";
import { useStudentsData } from "./dataHooks/useStudentsData";

function MainComp() {
  const [groupId, setGroupId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [cityId, setCityId] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [stageId, setStageId] = useState("");
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
      <div className="bg-white w-full h-full py-6 px-3 bg flex flex-col gap-3">
        <div className="flex justify-start items-center flex-wrap gap-2">
          <Button>تصدير ملف PDF</Button>
          <Button>طباعة</Button>
        </div>
        <form className="flex flex-wrap items-center ">
          <Selector
            val={cityId}
            options={citiesOptions}
            setter={setCityId}
            label={"تصفية حسب المنطقة"}
          ></Selector>
          <Selector
            val={sectionId}
            options={sectionOptions}
            setter={setSectionId}
            label={" تصفية حسب القسم"}
          ></Selector>
          <Selector
            val={stageId}
            options={stageOptions}
            setter={setStageId}
            label={"تصفية حسب المرحلة"}
          ></Selector>

          <Selector
            val={placeId}
            options={placeOptions}
            setter={setPlaceId}
            label={"تصفية حسب المكان"}
          ></Selector>
          <Selector
            val={groupId}
            options={groupOptions}
            setter={setGroupId}
            label={"تصفية حسب المجموعة"}
          ></Selector>
        </form>
        {!!filteredStudents && filteredStudents.length !== 0 ? (
          <Table data={filteredStudents}></Table>
        ) : null}
      </div>
    </div>
  );
}

export default MainComp;
