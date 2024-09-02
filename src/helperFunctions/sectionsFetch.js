import { baseURL } from "../baseURL";

export async function sectionsFetch() {
  const res = await fetch(baseURL + "Lookup/GetSections");
  const data = await res.json();
  return JSON.parse(data[0].jsonData);
}
