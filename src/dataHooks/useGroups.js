import { useQuery } from "react-query";
import { groupsFetch } from "../helperFunctions/groupsFetch";

export function useGroups() {
  const { data: groups, isLoading: groupIsLoading } = useQuery(
    "groups",
    groupsFetch
  );

  return { groups, groupIsLoading };
}
