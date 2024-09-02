import { baseURL } from "../baseURL";

export async function citiesFetch() {
    const res = await fetch(baseURL + "Lookup/GetCities");
    const data = await res.json();
    return JSON.parse(data[0].jsonData);
  }