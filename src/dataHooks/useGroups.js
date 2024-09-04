import { useQuery } from "@tanstack/react-query";
import { groupsFetch } from "../services/groupsFetch";

export function useGroups(placeId) {
  console.log(!!placeId);

  const { data: groups, isSuccess: groupIsSuccess } = useQuery({
    queryKey: ["groups", placeId],
    queryFn: () => groupsFetch(placeId),
    enabled: !!placeId,
  });
  let groupOptions;
  if (groupIsSuccess) {
    groupOptions = groups?.map((item) => {
      return {
        value: item.GroupsId,
        label: item.GroupsNameAr,
      };
    });
  }

  return groupOptions;
}
