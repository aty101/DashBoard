import axios from "axios";
import { baseURL } from "../baseURL";

export async function placeDataFetch(cityId, sectionId, stageId) {
  const res = await axios.get(
    baseURL +
      `Student/GetPlaces?PlacesData={"CityId":${cityId},"SectionId":${sectionId},"StageId":${stageId}`
  );

  return JSON.parse(res.data[0].jsonData);
}
