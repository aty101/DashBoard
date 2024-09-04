import Selector from "../components/Selector";
function Filter({ setState, state, options }) {
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
        disabled={!placeId}
        val={groupId}
        options={groupOptions}
        setter={(e) => handleSelect("groupId", e)}
        label={"تصفية حسب المجموعة"}
      ></Selector>
    </form>
  );
}

export default Filter;
