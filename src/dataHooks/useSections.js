import { useQuery } from "@tanstack/react-query";
import { sectionsFetch } from "../services/sectionsFetch";

export function useSections() {
  const { data: sections, isLoading: sectionIsLoading } = useQuery({
    queryKey: ["sections"],
    queryFn: sectionsFetch,
  });
  let sectionOptions;
  if (!sectionIsLoading) {
    sectionOptions = sections?.map((item) => {
      return {
        value: item.SectionId,
        label: item.SectionName,
      };
    });
  }

  return sectionOptions;
}
