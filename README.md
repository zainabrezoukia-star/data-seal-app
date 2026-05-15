<div align="center">

```
██████╗  █████╗ ████████╗ █████╗       ███████╗███████╗ █████╗ ██╗     
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗      ██╔════╝██╔════╝██╔══██╗██║     
██║  ██║███████║   ██║   ███████║█████╗███████╗█████╗  ███████║██║     
██║  ██║██╔══██║   ██║   ██╔══██║╚════╝╚════██║██╔══╝  ██╔══██║██║     
██████╔╝██║  ██║   ██║   ██║  ██║      ███████║███████╗██║  ██║███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝      ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝
```

**Secure Ephemeral Messaging & Data Breach Detection Platform**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-00C2FF?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-00FFD1?style=flat-square)
![Academic](https://img.shields.io/badge/Academic%20Project-2025--2026-7B2FBE?style=flat-square)

</div>

---

## 🔒 What is DATA-SEAL?

**DATA-SEAL** is a secure web platform built to protect digital privacy through two core pillars:

1. **Ephemeral Messaging** — Messages and media files that self-destruct after being viewed once, leaving zero trace behind.
2. **Data Breach Detection** — A verification tool that checks whether your personal information (email, phone, password, ID) has been exposed in known public data breaches.

> Built as a cybersecurity academic project focused on **Privacy & Personal Data Protection**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔒 **Ephemeral Messages** | Text messages that vanish permanently after one view |
| 📁 **Secure Media Sharing** | Send images, videos and audio with auto-destruction |
| 🔍 **Breach Detection** | Check emails, phones, passwords against leak databases |
| 🛡️ **Security Recommendations** | Intelligent tips to improve your personal cybersecurity |
| 💻 **Cyberpunk UI** | Futuristic interface designed to raise security awareness |

---

## 🏗️ Architecture

```
┌─────────┐     HTTP      ┌──────────────┐     Logic     ┌─────────────────────────┐
│  USER   │ ────────────► │   FRONTEND   │ ────────────► │     NODE.JS SERVER      │
│ Browser │ ◄──────────── │ HTML/CSS/JS  │ ◄──────────── │      Express.js         │
└─────────┘               └──────────────┘               └────────────┬────────────┘
                                                                       │
                                              ┌────────────────────────┼────────────────────────┐
                                              ▼                        ▼                        ▼
                                   ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
                                   │  VERIFY MODULE  │     │  TEMP STORAGE   │     │   FILE HANDLER  │
                                   │  Breach DB API  │     │  Ephemeral DB   │     │  Secure Upload  │
                                   └─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** — Semantic structure
- **CSS3** — Cyberpunk dark theme styling
- **JavaScript (ES6+)** — Dynamic interactions

### Backend
- **Node.js** — JavaScript runtime environment
- **Express.js** — Web framework for routing and middleware

### DevOps & Deployment
- **Railway** — Cloud hosting and deployment
- **GitHub** — Version control and CI/CD

### Security & APIs
- **Ephemeral Storage** — Temporary in-memory/DB message management
- **REST API** — Breach verification endpoints
- **Secure Routing** — Protected endpoint architecture

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- npm (comes with Node.js)
- A terminal / command line

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/data-seal.git
cd data-seal

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:3000` 🚀

### Environment Variables

```env
PORT=3000
NODE_ENV=development
# Add your breach API keys here
BREACH_API_KEY=your_api_key_here
```

---

## 📁 Project Structure

```
data-seal/
├── 📂 public/              # Static frontend files
│   ├── index.html          # Main page
│   ├── style.css           # Cyberpunk theme styles
│   └── app.js              # Client-side JavaScript
│
├── 📂 routes/              # Express.js route handlers
│   ├── messages.js         # Ephemeral message routes
│   ├── breach.js           # Breach detection routes
│   └── media.js            # Secure file upload routes
│
├── 📂 controllers/         # Business logic
│   ├── messageController.js
│   └── breachController.js
│
├── 📂 utils/               # Helper functions
│   └── cleanup.js          # Auto-deletion logic
│
├── server.js               # App entry point
├── package.json            # Dependencies
└── README.md               # This file
```

---

## 🔐 How Ephemeral Messaging Works

```
User A creates message
        │
        ▼
  Unique link generated
  Message stored temporarily
        │
        ▼
  Link shared with User B
        │
        ▼
  User B opens the link
        │
        ▼
  ✅ Message displayed ONCE
        │
        ▼
  🗑️ Message PERMANENTLY DELETED
     (no recovery possible)
```

---

## 🔍 Breach Detection

DATA-SEAL checks submitted personal data against public breach databases:

- **Email addresses** — Cross-referenced with known breach records
- **Phone numbers** — Checked for exposure in leaked datasets
- **Passwords** — Verified using secure k-anonymity hashing (never sent in plain text)
- **CIN / ID numbers** — Validated against available public breach data

> ⚠️ No submitted data is stored. All checks are performed in real-time and discarded immediately.

---

## 🗺️ Roadmap

- [x] Ephemeral text messaging
- [x] Secure media sharing
- [x] Email/phone breach detection
- [x] Cybersecurity recommendations
- [ ] End-to-end AES-256 encryption
- [ ] Two-factor authentication (2FA / TOTP)
- [ ] AI-powered threat detection
- [ ] Real-time analytics dashboard
- [ ] Mobile application (React Native)

---

## 🙏 Acknowledgements

- [Have I Been Pwned](https://haveibeenpwned.com) — Breach database reference
- [Node.js](https://nodejs.org) & [Express.js](https://expressjs.com) — Core framework
- [Railway](https://railway.app) — Cloud deployment platform

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**DATA-SEAL** — *Your data. Your rules. No traces.*

Made with 🔒 for cybersecurity awareness | Academic Project 2025–2026

</div>