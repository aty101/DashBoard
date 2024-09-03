import axios from "./axios";

export async function groupsFetch() {
  try{
    const res = await axios.get("Lookup/GetGroups");
  
    return JSON.parse(res.data[0].jsonData);
    
  }catch{
    throw new Error("Failed to fetch groups data")
  }
}
