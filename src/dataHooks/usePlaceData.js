import { useQuery } from "@tanstack/react-query";
import { placeDataFetch } from "../helperFunctions/placeDataFetch";

export function usePlaceData(cityId, sectionId, stageId) {
  const {
    data: placeData,
    isSuccess: placeIsSuccess,
    error,
  } = useQuery({
    queryKey: ["placeData", cityId, sectionId, stageId],
    queryFn: () => placeDataFetch(cityId, sectionId, stageId),
    enabled: !!cityId && !!sectionId && !!stageId,
  });
  if (error) {
    console.log("usePlaceData");
  }

  return { placeData, placeIsSuccess };
}
