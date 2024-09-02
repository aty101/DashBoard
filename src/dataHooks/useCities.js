import { useQuery } from "@tanstack/react-query";
import { citiesFetch } from "../helperFunctions/citiesFetch";

export function useCities() {
  const { data: cities, isLoading: citiesIsLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: citiesFetch,
  });

  return { cities, citiesIsLoading };
}
