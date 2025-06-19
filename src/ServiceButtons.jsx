import React from "react";

const services = [
  { emoji: "📊", name: "FDI Reporting (FC-GPR/FC-TRS/APR)" },
  { emoji: "🌏", name: "ODI Compliance" },
  { emoji: "💵", name: "ECB Documentation" },
  { emoji: "🧾", name: "LRS Remittance Tracking" },
  { emoji: "📑", name: "Form 15CA/CB Automation" },
  { emoji: "🏢", name: "LO/BO/PO Incorporation" },
  { emoji: "🤝", name: "Joint Venture Advisory" },
  { emoji: "🌐", name: "Cross-Border FDI/Tax/Stamp Duty Payment" },
  { emoji: "📜", name: "MOA/AOA Drafting" },
  { emoji: "🌍", name: "DTAA Benefit Applications" },
  { emoji: "📈", name: "Transfer Pricing Reports" },
  { emoji: "🏛️", name: "GST on Export/Import" },
  { emoji: "💼", name: "NRI Taxation" },
  { emoji: "🏦", name: "Multi-Currency Accounts" },
  { emoji: "🔄", name: "Forex Hedging Tools" },
  { emoji: "💸", name: "Export Bill Discounting" },
  { emoji: "🔐", name: "Bank Guarantee Issuance" },
  { emoji: "🛡️", name: "AML Compliance" },
  { emoji: "📅", name: "Annual Compliance Calendar" },
  { emoji: "🔍", name: "Due Diligence Reports" },
  { emoji: "⚖️", name: "Dispute Resolution (RBI/FEMA)" }
];

function ServiceButtons() {
  const handleClick = (service) => {
    console.log(`Service selected: ${service.name}`);
    // Add handlers for other services as needed
  };

  return (
    <div style={{
      margin: "40px 15px 20px 15px",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: "1px solid #e1e8ed"
    }}>
      <h3 style={{
        margin: "0 0 20px 0",
        fontSize: "18px",
        fontWeight: "600",
        color: "#2c3e50",
        textAlign: "center"
      }}>
        🛠️ One-Stop Cross-Border Services
      </h3>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center"
      }}>
        {services.map((service, idx) => (
          service.name === "FDI Reporting (FC-GPR/FC-TRS/APR)" ? (
            <button
              key={idx}
              onClick={() => window.open("https://rmwb.icicibank.com/prevett/", "_blank", "noopener")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                backgroundColor: "#f8f9fa",
                color: "#2c3e50",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e3f2fd";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
              }}
            >
              <span style={{ fontSize: "16px" }}>📊</span>
              <span>{service.name}</span>
            </button>
          ) : (
            <button
              key={idx}
              onClick={() => handleClick(service)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                backgroundColor: "#f8f9fa",
                color: "#2c3e50",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e3f2fd";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
              }}
            >
              <span style={{ fontSize: "16px" }}>{service.emoji}</span>
              <span>{service.name}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );
}

export default ServiceButtons;
