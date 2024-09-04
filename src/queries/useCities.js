import { useQuery } from "@tanstack/react-query";
import { citiesFetch } from "../services/citiesFetch";

export function useCities() {
  const { data: cities, isLoading: citiesIsLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: citiesFetch,
  });
  let citiesOptions;
  if (!citiesIsLoading) {
    citiesOptions = cities?.map((item) => {
      return {
        value: item.CityId,
        label: item.Name_A,
      };
    });
  }

  return  citiesOptions;
}
