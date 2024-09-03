import axios from "./axios";

export async function sectionsFetch() {
  try {
    const res = await axios.get("Lookup/GetSections");
    
    return JSON.parse(res.data[0].jsonData);
  } catch {
    throw new Error("Failed to fetch sections data");
  }
}
