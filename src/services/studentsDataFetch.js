import axios from "./axios";

export async function fetchStudentsData(sectionId, groupId, placeId, stageId) {
  try{
    const res = await axios.get(
      `Dashboard/GetTrainingAppStudents?PageNumber=${1}&PageSize=${5}&filter={"StageId":${stageId},"SectionId":${sectionId},"GroupsId":${groupId} ,"PlaceId":${placeId}}`
    );
    return res.data.items;
    
  }catch{
    throw new Error("Failed to fetch students data")
  }
}
