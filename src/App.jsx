import { useQuery } from "react-query";

async function fetchData(api) {
  const res = await fetch(api);
  const data = await res.json();
  return JSON.parse(data[0].jsonData);
}

function App() {
  const { data: sections } = useQuery("sections", () =>
    fetchData("https://educationapi.mygatein.com/Lookup/GetSections")
  );

  const { data: groups } = useQuery("groups", () =>
    fetchData("https://educationapi.mygatein.com/Lookup/GetGroups")
  );
  const { data: cities } = useQuery("cities", () =>
    fetchData("https://educationapi.mygatein.com/Lookup/GetCities")
  );

  const { data: placeData } = useQuery(
    "placeData",
    () =>
      fetchData(
        `https://educationapi.mygatein.com/Student/GetPlaces?PlacesData={"CityId":${
          cities[0].CityId
        },"SectionId":${sections[0].SectionId},"StageId":${1}`
      ),
    {
      enabled: !!cities && !!sections,
    }
  );

  return <button onClick={() => console.log(placeData)}>qwfqwf</button>;
}

export default App;
