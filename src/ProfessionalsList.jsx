import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ChatModal from "./ChatModal";

function ProfessionalList({ file, title, bgColor, accentColor }) {
  const [data, setData] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data),
        });
      })
      .catch((err) => console.error("Error loading CSV:", err));
  }, [file]);

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
      {/* Chat modal */}
      {selectedProfile && (
        <ChatModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}

      {/* Header */}
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

      {/* Table Container */}
      <div style={{
        maxHeight: "600px",
        overflowY: "auto"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px"
        }}>
          <thead style={{
            backgroundColor: "#f8f9fa",
            position: "sticky",
            top: "0",
            zIndex: "10"
          }}>
            <tr>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>Location</th>
              <th style={headerStyle}>Services</th>
              <th style={headerStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr 
                key={idx} 
                style={{
                  borderBottom: "1px solid #f1f3f4",
                  transition: "background-color 0.2s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = "#f8f9fa"}
                onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = "transparent"}
              >
                <td style={cellStyle}>
                  <div>
                    <div style={{
                      fontWeight: "600",
                      color: "#2c3e50",
                      marginBottom: "2px"
                    }}>
                      {row.name}
                    </div>
                    <a
                      href={row.profile_url}
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
                    {row.city}
                    {row.state && <><br/><span style={{fontSize: "12px"}}>{row.state}</span></>}
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
                    {row.services_offered}
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
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-1px)";
                      e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
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

// Reusable styles
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
