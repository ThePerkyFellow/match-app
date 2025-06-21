# 🌍 Cross-Border Professional Matching Platform Demo

*Connecting FEMA, DTAA & Tax specialists worldwide for seamless cross-border compliance*

https://match-app-sooty.vercel.app/ is a platform designed to bridge the gap between **Chartered Accountants/Company Secretaries/Lawyers in India** and **CPAs/Tax professionals overseas**. Built specifically for professionals dealing with cross-border transactions, FEMA compliance, DTAA benefits, and international tax structuring.

### ✨ Key Features

- **🔍 Smart Professional Discovery**: Find verified CA/CS/CPA professionals by specialization and jurisdiction
- **💬 Real-time Chat Integration**: Secure communication between professionals across borders  
- **🛠️ One-Stop Service Hub**: Direct access to 20+ cross-border services including FDI reporting, ODI compliance, and tax advisory
- **📊 Live Data Integration**: Real-time professional profiles from verified databases
- **🌐 Multi-Jurisdiction Support**: Seamless collaboration between Indian and international tax regimes

## 🎯 Perfect For

- **Indian CAs/CS** seeking overseas tax expertise for client matters
- **International CPAs** requiring FEMA/DTAA guidance for Indian operations  
- **Multinational corporations** needing cross-border compliance support
- **Investment funds** structuring India entry/exit strategies
- **Legal professionals** handling international corporate transactions

## 🛠️ Tech Stack

```bash
Frontend: React 18.3.1 + Modern CSS
Data Processing: PapaParse for CSV handling
Deployment: Vercel/Netlify
Architecture: Component-based SPA
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm/yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/ThePerkyFellow/match-app.git

# Navigate to project directory
cd match-app

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `https://match-app-sooty.vercel.app/`

## 📁 Project Structure

```
match-app/
├── public/
│   ├── ca_profiles_all.csv          # Indian professionals database
│   ├── icici_cs_list_final.csv      # International professionals database
│   └── manifest.json
├── src/
│   ├── App.js                       # Main application component
│   ├── ProfessionalList.jsx         # Professional listing component
│   ├── ChatModal.jsx               # Real-time chat interface
│   ├── ServiceButtons.jsx          # Cross-border services hub
│   └── index.js
└── package.json
```

## 🌟 Core Services Offered

### FEMA Compliance
- 📊 **FDI Reporting (FC-GPR)** - Automated form generation
- 🌏 **ODI Compliance** - Overseas investment documentation  
- 💵 **ECB Documentation** - External commercial borrowing support
- 🧾 **LRS Remittance Tracking** - Liberalized remittance monitoring

### Company Structuring  
- 🏢 **LO/BO/PO Incorporation** - Indian entity establishment
- 🤝 **Joint Venture Advisory** - Cross-border partnerships
- 🌐 **Cross-Border Mergers** - International M&A support

### Tax Solutions
- 🌍 **DTAA Benefit Applications** - Tax treaty optimization
- 📈 **Transfer Pricing Reports** - Arm's length compliance
- 💼 **NRI Taxation** - Non-resident tax planning

### Banking & Advisory
- 🏦 **Multi-Currency Accounts** - International banking setup
- 🔄 **Forex Hedging Tools** - Currency risk management
- 🛡️ **AML Compliance** - Anti-money laundering support

## 🔧 Configuration

### Environment Variables
```bash
# Optional: Set custom API endpoints
REACT_APP_API_URL=your-api-endpoint
REACT_APP_ENVIRONMENT=production
```

### Data Sources
- **Indian Professionals**: `public/ca_profiles_all.csv`
- **International Professionals**: `public/icici_cs_list_final.csv`

*Data is automatically loaded and processed on application start*

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy build folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

## 🤝 Contributing

We welcome contributions from the professional services community!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow React best practices
- Maintain professional data privacy
- Test cross-browser compatibility
- Document new features

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ICAI** for CA/CS professional data standards
- **AICPA** for international CPA guidelines  
- **RBI** for FEMA compliance frameworks
- **Professional services community** for valuable feedback

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/ThePerkyFellow/match-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ThePerkyFellow/match-app/discussions)
- **Professional Inquiries**: Connect via the platform's chat feature

---

**Built with ❤️ for the global professional services community**
