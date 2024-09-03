// Dashboard/GetTrainingAppStudents?PageNumber=${page}&PageSize=${PAGE_SIZE}&filter={"StageId":${StageId}, "SectionId":${SectionId}, "GroupsId":${GroupsId} , "PlaceId":${PlaceId}},
import { useQuery } from "@tanstack/react-query";
import { fetchStudentsData } from "../services/studentsDataFetch";
export function useStudentsData(PlaceId, SectionId, StageId, GroupsId) {
  const { data: filteredStudents } = useQuery({
    queryKey: ["students", PlaceId, SectionId, StageId, GroupsId],
    queryFn: () => {
      return fetchStudentsData(SectionId, GroupsId, PlaceId, StageId);
    },
    enabled: !!SectionId && !!StageId && !!GroupsId && !!PlaceId,
  });
  return filteredStudents;
}
