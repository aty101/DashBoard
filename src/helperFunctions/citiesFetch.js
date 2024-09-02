import axios from "axios";
import { baseURL } from "../baseURL";

export async function citiesFetch() {
  const res = await axios.get(baseURL + "Lookup/GetCities");

  return JSON.parse(res.data[0].jsonData);
}
