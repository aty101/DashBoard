import { useQuery } from "react-query";
import { sectionsFetch } from "../helperFunctions/sectionsFetch";

export  function useSections(){
    const { data: sections, isLoading: sectionIsLoading } = useQuery(
        "sections",
        sectionsFetch
      );
      
    return {sections,sectionIsLoading}
}