import { useQuery } from "react-query";
import { placeDataFetch } from "../helperFunctions/placeDataFetch";

export function usePlaceData(cityId, sectionId, stageId) {
  const {
    data: placeData,
    isSuccess: placeIsSuccess,
    error,
  } = useQuery(
    ["placeData", cityId, sectionId,stageId],
    () => placeDataFetch(cityId, sectionId, stageId),
    {
      enabled: !!cityId && !!sectionId && !!stageId,
    }
  );
  if (error) {
    console.log("usePlaceData");
  }

  return { placeData, placeIsSuccess };
}
