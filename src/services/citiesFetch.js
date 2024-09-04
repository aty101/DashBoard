import axios from "./axios";

export async function citiesFetch() {
  try {
  
    const res = await axios.get("Lookup/GetCities");
    return JSON.parse(res.data[0].jsonData);
  } catch {
    throw new Error("Failed to fetch cities data");
  }
}
