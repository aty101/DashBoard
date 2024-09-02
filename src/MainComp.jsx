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
  const { cities, citiesIsLoading } = useCities();
  const { sections, sectionIsLoading } = useSections();
  const { groups, groupIsLoading } = useGroups();
  const { placeData, placeIsSuccess } = usePlaceData(
    cityId,
    sectionId,
    stageId
  );
  const { filteredStudents, filteredStudentsIsSuccess } = useStudentsData(
    placeId,
    sectionId,
    stageId,
    groupId,
    5,
    1
  );
  let citiesOptions;
  let sectionOptions;
  let groupOptions;
  let placeOptions;

  if (filteredStudentsIsSuccess) {
    console.log(filteredStudents);
  }

  if (!citiesIsLoading) {
    citiesOptions = cities?.map((item) => {
      return {
        value: item.CityId,
        label: item.Name_A,
      };
    });
  }
  if (!sectionIsLoading) {
    sectionOptions = sections?.map((item) => {
      return {
        value: item.SectionId,
        label: item.SectionName,
      };
    });
  }
  if (!groupIsLoading) {
    groupOptions = groups?.map((item) => {
      return {
        value: item.GroupsId,
        label: item.GroupsNameAr,
      };
    });
  }
  if (placeIsSuccess) {
    placeOptions = placeData?.map((item) => {
      return {
        value: item.PlaceId,
        label: item.PlaceNameAr,
      };
    });
  }
  const stageOptions = [
    { label: "مرحلة ثانية", value: 2 },
    { label: "مرحلة ثالثة", value: 3 },
  ];
  return (
    <div className="w-full h-[100dvh]  bg-stone-600 py-8 px-4">
      <div className="bg-white w-full h-full py-6 px-3 bg flex flex-col gap-3">
        <div className="flex justify-start items-center flex-wrap gap-2">
          <Button>تصدير ملف PDF</Button>
          <Button>طباعة</Button>
        </div>
        <form className="flex flex-wrap items-center ">
          <Selector options={citiesOptions} setter={setCityId}>
            تصفية حسب المنطقة
          </Selector>
          <Selector options={sectionOptions} setter={setSectionId}>
            تصفية حسب القسم
          </Selector>
          <Selector options={stageOptions} setter={setStageId}>
            تصفية حسب المرحلة
          </Selector>

          <Selector options={placeOptions} setter={setPlaceId}>
            تصفية حسب المكان
          </Selector>
          <Selector options={groupOptions} setter={setGroupId}>
            تصفية حسب المجموعة
          </Selector>
        </form>
        {!!filteredStudents && filteredStudents.length !== 0 ? (
          <Table data={filteredStudents}></Table>
        ) : null}
      </div>
    </div>
  );
}

export default MainComp;
