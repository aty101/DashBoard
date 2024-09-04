import { useEffect, useRef, useState } from "react";

import { useCities } from "../queries/useCities";
import { useSections } from "../queries/useSections";
import { useGroups } from "../queries/useGroups";
import { usePlaceData } from "../queries/usePlaceData";
import { useStudentsData } from "../queries/useStudentsData";
import Filter from "../components/Filter";
import Print from "../components/Print";
import FilteredStudents from "../components/FilteredStudents";
import NavBar from "../components/NavBar";

function Student() {
  const [state, setState] = useState({
    groupId: "",
    sectionId: "",
    cityId: "",
    placeId: "",
    stageId: "",
  });
  const [araEng, setAraEng] = useState(true);
 
  const ref = useRef("null");
  const { groupId, sectionId, cityId, placeId, stageId } = state;

  const citiesOptions = useCities();
  const sectionOptions = useSections();
  const placeOptions = usePlaceData(
    cityId.value,
    sectionId.value,
    stageId.value
  );
  const groupOptions = useGroups(placeId?.value);
  const filteredStudents = useStudentsData(
    placeId?.value,
    sectionId.value,
    stageId.value,
    groupId?.value
  );

  const stageOptions = [
    { label: "مرحلة ثالثة", value: 2 },
    { label: "مرحلة رابعة", value: 3 },
  ];
  const options = {
    citiesOptions,
    sectionOptions,
    placeOptions,
    groupOptions,
    stageOptions,
  };
  return (
    <div className="w-full h-[100dvh]  bg-stone-600 py-8 px-4">
      <div className="bg-white w-full h-full py-6 px-3 bg flex flex-col gap-3 lg:gap-8">
        <NavBar changeMode={setAraEng} mode={araEng} />
        <Print mode={araEng} reference={ref} filteredStudents={filteredStudents} />
        <Filter mode={araEng} options={options} setState={setState} state={state} />
        <FilteredStudents mode={araEng} filteredStudents={filteredStudents} reference={ref} />
      </div>
    </div>
  );
}

export default Student;
