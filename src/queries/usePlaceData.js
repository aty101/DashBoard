import { useQuery } from "@tanstack/react-query";
import { placeDataFetch } from "../services/placeDataFetch";

export function usePlaceData(cityId, sectionId, stageId) {
  const { data: placeData, isSuccess: placeIsSuccess } = useQuery({
    queryKey: ["placeData", cityId, sectionId, stageId],
    queryFn: () => placeDataFetch(cityId, sectionId, stageId),
    enabled: !!cityId && !!sectionId && !!stageId,
  });
  let placeOptions;
  if (placeIsSuccess) {
    placeOptions = placeData?.map((item) => {
      return {
        value: item.PlaceId,
        label: item.PlaceNameAr,
      };
    });
  }

  return placeOptions;
}
