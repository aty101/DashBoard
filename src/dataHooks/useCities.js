import { useQuery } from "react-query";
import { citiesFetch } from "../helperFunctions/citiesFetch";

export function useCities() {
  const { data: cities, isLoading: citiesIsLoading } = useQuery("cities",citiesFetch);

  return { cities, citiesIsLoading };
}
