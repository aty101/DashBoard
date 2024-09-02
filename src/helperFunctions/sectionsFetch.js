import axios from "axios";
import { baseURL } from "../baseURL";

export async function sectionsFetch() {
  const res = await axios.get(baseURL + "Lookup/GetSections");
  return JSON.parse(res.data[0].jsonData);
}
