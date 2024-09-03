import { useQuery } from "@tanstack/react-query";
import { groupsFetch } from "../services/groupsFetch";

export function useGroups() {
  const { data: groups, isLoading: groupIsLoading } = useQuery({
    queryKey: ["groups"],
    queryFn: groupsFetch,
  });
  let groupOptions;
  if (!groupIsLoading) {
    groupOptions = groups?.map((item) => {
      return {
        value: item.GroupsId,
        label: item.GroupsNameAr,
      };
    });
  }

  return groupOptions;
}
