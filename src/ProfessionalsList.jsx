import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ChatModal from "./ChatModal";

function ProfessionalList({ file, title, bgColor, accentColor }) {
  const [data, setData] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const filePath = `${process.env.PUBLIC_URL}${file}`;
    
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`File not found: ${filePath} (${response.status})`);
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log(`Loaded ${results.data.length} records from ${file}`);
            setData(results.data);
            setLoading(false);
          },
          error: (error) => {
            console.error("Papa Parse error:", error);
            setError("Failed to parse CSV data");
            setLoading(false);
          }
        });
      })
      .catch((err) => {
        console.error("Error loading CSV:", err);
        setError(`Failed to load ${file}: ${err.message}`);
        setLoading(false);
      });
  }, [file]);

  if (loading) {
    return (
      <div style={{
        flex: "1",
        minWidth: "450px",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "40px",
        textAlign: "center"
      }}>
        <h3>Loading {title}...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        flex: "1",
        minWidth: "450px",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "40px",
        textAlign: "center",
        color: "red"
      }}>
        <h3>Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{
      flex: "1",
      minWidth: "450px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      overflow: "hidden",
      border: "1px solid #e1e8ed"
    }}>
      {selectedProfile && (
        <ChatModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}

      <div style={{
        backgroundColor: bgColor,
        padding: "20px",
        borderBottom: "1px solid #e1e8ed"
      }}>
        <h3 style={{
          margin: "0",
          fontSize: "18px",
          fontWeight: "600",
          color: "#2c3e50"
        }}>
          {title}
        </h3>
        <p style={{
          margin: "5px 0 0 0",
          fontSize: "14px",
          color: "#7f8c8d"
        }}>
          {data.length} professionals available
        </p>
      </div>

      <div style={{ maxHeight: "600px", overflowY: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px"
        }}>
          <thead>
            <tr>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>Location</th>
              <th style={headerStyle}>Services</th>
              <th style={headerStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>
                  <div>
                    <div style={{
                      fontWeight: "600",
                      color: "#2c3e50",
                      marginBottom: "2px"
                    }}>
                      {row.name || row.Name}
                    </div>
                    <a
                      href={row.profile_url || row['Retrieved Website'] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12px",
                        color: accentColor,
                        textDecoration: "none"
                      }}
                    >
                      View Profile →
                    </a>
                  </div>
                </td>
                <td style={cellStyle}>
                  <div style={{ color: "#7f8c8d" }}>
                    {row.city || row.City}
                    {(row.state || row.Organization) && (
                      <><br/><span style={{fontSize: "12px"}}>{row.state || row.Organization}</span></>
                    )}
                  </div>
                </td>
                <td style={cellStyle}>
                  <div style={{
                    fontSize: "12px",
                    color: "#7f8c8d",
                    lineHeight: "1.4",
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}>
                    {row.services_offered || row.Designation || 'Professional Services'}
                  </div>
                </td>
                <td style={cellStyle}>
                  <button
                    onClick={() => setSelectedProfile(row)}
                    style={{
                      backgroundColor: accentColor,
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                  >
                    💬 Consult
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const headerStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: "600",
  color: "#2c3e50",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  borderBottom: "2px solid #e1e8ed"
};

const cellStyle = {
  padding: "16px",
  verticalAlign: "top"
};

export default ProfessionalList;
