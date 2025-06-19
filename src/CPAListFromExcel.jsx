import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function CPAListFromExcel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the Excel file from public folder
    fetch("/cpa_standardized.csv")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: "array" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const jsonData = XLSX.utils.sheet_to_json(ws, { defval: "" });
        setData(jsonData);
      })
      .catch((err) => console.error("Error reading Excel file:", err));
  }, []);

  return (
    <div>
      <h3>CPA (US/Overseas) List</h3>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="4" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, idx) => (
                <th key={idx}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CPAListFromExcel;
