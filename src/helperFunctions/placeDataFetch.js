import { baseURL } from "../baseURL";

export async function placeDataFetch(cityId, sectionId,stageId) {
  const res = await fetch(
    baseURL +
      `Student/GetPlaces?PlacesData={"CityId":${cityId},"SectionId":${sectionId},"StageId":${stageId}`
  );
  const data = await res.json();
  return JSON.parse(data[0].jsonData);
}
