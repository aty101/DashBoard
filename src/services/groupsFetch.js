import axios from "./axios";

export async function groupsFetch(placeId) {
  try {
    const res = await axios.get(
      `Student/GetGroups?placeid={"PlaceId":${placeId}}`
    );
    return res.data && JSON.parse(res?.data[0]?.jsonData);
  } catch {
    throw new Error("Failed to fetch groups data");
  }
}
