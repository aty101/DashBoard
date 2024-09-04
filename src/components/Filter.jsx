import Selector from "../components/Selector";
function Filter({ setState, state, options, mode }) {
  const { groupId, sectionId, cityId, placeId, stageId } = state;
  const {
    citiesOptions,
    sectionOptions,
    stageOptions,
    placeOptions,
    groupOptions,
  } = options;

  function handleSelect(name, selectedOption) {
    if (name === "stageId" || name === "sectionId" || name === "cityId") {
      setState((prev) => ({
        ...prev,
        [name]: selectedOption,
        placeId: null,
        groupId: null,
      }));
    } else if (name === "placeId") {
      setState((prev) => ({ ...prev, [name]: selectedOption, groupId: null }));
    } else {
      setState((prev) => ({ ...prev, [name]: selectedOption }));
    }
  }

  return (
    <form className="flex flex-wrap items-center ">
      <Selector
        val={cityId}
        options={citiesOptions}
        setter={(e) => handleSelect("cityId", e)}
        placeholder={mode ? "المنطقة" : "region"}
        label={mode ? "تصفية حسب المنطقة" : "Filter by region"}
      ></Selector>
      <Selector
        val={sectionId}
        options={sectionOptions}
        setter={(e) => handleSelect("sectionId", e)}
        label={mode ? "تصفية حسب القسم" : "Filter by department"}
        placeholder={mode ? "القسم" : "department"}
      ></Selector>
      <Selector
        val={stageId}
        options={stageOptions}
        setter={(e) => handleSelect("stageId", e)}
        label={mode ? "تصفية حسب المرحلة" : "Filter by stage"}
        placeholder={mode ? "المرحلة" : "stage"}
      ></Selector>

      {
        <Selector
          val={placeId}
          options={placeOptions}
          setter={(e) => handleSelect("placeId", e)}
          label={mode ? "تصفية حسب المكان" : "Filter by location"}
          disabled={!(!!stageId && !!cityId && !!sectionId)}
          placeholder={mode ? "المكان" : "location"}
        ></Selector>
      }
      <Selector
        disabled={!placeId}
        val={groupId}
        options={groupOptions}
        setter={(e) => handleSelect("groupId", e)}
        label={mode ? "تصفية حسب المجموعة" : "Filter by group"}
        placeholder={mode ? "المجموعة" : "group"}
      ></Selector>
    </form>
  );
}

export default Filter;
