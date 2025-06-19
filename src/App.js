import React from "react";
import ProfessionalList from "./ProfessionalList";
import ServiceButtons from "./ServiceButtons";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "0",
      margin: "0"
    }}>
      <header style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "20px 15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{
          margin: "0",
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center"
        }}>
          🌍 Cross-Border Professional Matching Platform
        </h1>
        <p style={{
          margin: "5px 0 0 0",
          opacity: "0.9",
          textAlign: "center",
          fontSize: "14px"
        }}>
          Connect with FEMA, DTAA & Tax specialists worldwide
        </p>
      </header>

      <div style={{
        display: "flex",
        gap: "20px",
        padding: "20px 15px",
        maxWidth: "100%",
        margin: "0",
        boxSizing: "border-box",
        flexWrap: "wrap"
      }}>
        <ProfessionalList
          file="/ca_profiles_all.csv"
          title="🇮🇳 CA/CS/Lawyers in India"
          bgColor="#e8f5e8"
          accentColor="#27ae60"
        />
        <ProfessionalList
          file="/icici_cs_list_final.csv"
          title="🌍 CPAs/Professionals Overseas"
          bgColor="#e3f2fd"
          accentColor="#3498db"
        />
      </div>

      <ServiceButtons />
    </div>
  );
}

export default App;
