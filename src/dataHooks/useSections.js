import { useQuery } from "@tanstack/react-query";
import { sectionsFetch } from "../helperFunctions/sectionsFetch";

export function useSections() {
  const { data: sections, isLoading: sectionIsLoading } = useQuery({
    queryKey: ["sections"],
    queryFn: sectionsFetch,
  });

  return { sections, sectionIsLoading };
}
