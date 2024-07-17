import { useState } from "react";
import Papa from "papaparse";
function Try() {
  const [text, setText] = useState("");

  const loadFile = async () => {
    try {
      const response = await fetch("Downloads/OnlineArticlesPopularity.csv"); // Adjust the file path
      const csvText = await response.text();
      setText(csvText);
    } catch (error) {
      console.error("Error loading CSV file:", error);
    }
  };

  return (
    <div>
      <button onClick={loadFile}>Load CSV</button>
      <pre>{text}</pre>
    </div>
  );
}
export default Try;
