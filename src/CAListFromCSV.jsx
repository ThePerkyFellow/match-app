import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function CAListFromCSV() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ca_standardized.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data),
        });
      });
  }, []);

  return (
    <div>
      <h3>CA/CS/Lawyers in India</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>
                <a href={row.profile_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CAListFromCSV;
