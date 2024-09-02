import { useQuery } from "react-query";
import { fetchStudentsData } from "../helperFunctions/studentsDataFetch";

// export function useStudentsData(placeId, groupId, sectionId,stageId) {
//   const { data: filteredStudents, isSuccess: filteredStudentsIsSuccess } =
//     useQuery(
//       ["filterStudents", placeId, groupId, sectionId],
//       () => fetchStudentsData(sectionId, groupId, placeId,stageId),
//       {
//         enabled: !!placeId && !!groupId,
//       }
//     );

//   return { filteredStudents, filteredStudentsIsSuccess };
// }

export function useStudentsData({ placeId, groupId }) {
  const { data: filteredStudents, isSuccess: filteredStudentsIsSuccess } =
    useQuery({
      queryKey: ["filterStudents"],
      queryFn: fetchStudentsData,
      enabled: !!placeId && !!groupId,
    });

  return { filteredStudents, filteredStudentsIsSuccess };
}
