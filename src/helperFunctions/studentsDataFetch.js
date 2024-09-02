import { baseURL } from "../baseURL";

export async function fetchStudentsData({
  sectionId,
  groupId,
  placeId,
  stageId,
}) {
  console.log(sectionId, groupId, placeId, stageId);

  const res = await fetch(
    baseURL +
      `Dashboard/GetTrainingAppStudents?PageNumber=${1}&PageSize=${5}&filter={"StageId":${stageId}, "SectionId":${sectionId}, "GroupsId":${groupId} , "PlaceId":${placeId}}`
  );
  const data = await res.json();
  return data.items;
}
