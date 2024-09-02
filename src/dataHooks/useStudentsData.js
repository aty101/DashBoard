// Dashboard/GetTrainingAppStudents?PageNumber=${page}&PageSize=${PAGE_SIZE}&filter={"StageId":${StageId}, "SectionId":${SectionId}, "GroupsId":${GroupsId} , "PlaceId":${PlaceId}},
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../baseURL";

// PlacesData={"CityId":${selectedArea},"SectionId":${selectedSectionId},"StageId":${selectedStageId}}"
const fetchStudents = async (
  PlaceId,
  SectionId,
  StageId,
  GroupsId,
  PAGE_SIZE,
  page
) => {
  const res = await axios.get(`
    ${baseURL}Dashboard/GetTrainingAppStudents?PageNumber=${page}&PageSize=${PAGE_SIZE}&filter={"StageId":${StageId}, "SectionId":${SectionId}, "GroupsId":${GroupsId},"PlaceId":${PlaceId}}`);
  return res.data.items;
};

export const useStudentsData = (
  PlaceId,
  SectionId,
  StageId,
  GroupsId,
  PAGE_SIZE,
  page
) => {
  const { data: filteredStudents, isSuccess: filteredStudentsIsSuccess } =
    useQuery({
      queryKey: [
        "students",
        PlaceId,
        SectionId,
        StageId,
        GroupsId,
        PAGE_SIZE,
        page,
      ],
      queryFn: () =>
        fetchStudents(PlaceId, SectionId, StageId, GroupsId, PAGE_SIZE, page),
      enabled:
        !!SectionId &&
        !!StageId &&
        !!GroupsId &&
        !!PlaceId &&
        !!PAGE_SIZE &&
        !!page,
    });
  return { filteredStudents, filteredStudentsIsSuccess };
};
