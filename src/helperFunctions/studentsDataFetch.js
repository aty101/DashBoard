import axios from "axios";
import { baseURL } from "../baseURL";

export async function fetchStudentsData(sectionId, groupId, placeId, stageId) {
  console.log(sectionId, groupId, placeId, stageId);

  const res = await axios.get(
    baseURL +
      `Dashboard/GetTrainingAppStudents?PageNumber=${1}&PageSize=${5}&filter={"StageId":${stageId},"SectionId":${sectionId},"GroupsId":${groupId},"PlaceId":${placeId}}`
  );
  console.log(res);
  return res.data.items;
}
