import { baseURL } from "../baseURL";

export async function groupsFetch() {
    const res = await fetch(baseURL + "Lookup/GetGroups");
    const data = await res.json();
    return JSON.parse(data[0].jsonData);
  }