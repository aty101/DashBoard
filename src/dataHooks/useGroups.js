import { useQuery } from "@tanstack/react-query";
import { groupsFetch } from "../helperFunctions/groupsFetch";

export function useGroups() {
  const { data: groups, isLoading: groupIsLoading } = useQuery({
    queryKey: ["groups"],
    queryFn: groupsFetch,
  });

  return { groups, groupIsLoading };
}
