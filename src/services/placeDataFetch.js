import axios from "./axios";

export async function placeDataFetch(cityId, sectionId, stageId) {
  try {
    const res = await axios.get(
      `Student/GetPlaces?PlacesData={"CityId":${cityId},"SectionId":${sectionId},"StageId":${stageId}`
    );

    return JSON.parse(res.data[0].jsonData);
  } catch {
    throw new Error("Failed to fetch places data");
  }
}
