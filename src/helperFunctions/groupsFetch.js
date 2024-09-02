import { baseURL } from "../baseURL";
import  axios  from 'axios';

export async function groupsFetch() {
    const res = await axios.get(baseURL + "Lookup/GetGroups");
    
    return JSON.parse(res.data[0].jsonData);
  }