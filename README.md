# 💳 Digital Wallet Frontend

A secure, role-based, and user-friendly **frontend application** for a Digital Wallet System (similar to bKash or Nagad).  
This app consumes a backend API (separately provided or mocked) to enable **Users, Agents, and Admins** to perform financial operations and manage wallets seamlessly.

---

## 🚀 Features

### 🌍 Public

- Landing page introducing the wallet service
- User Registration & Login

### 👤 User Dashboard

- View wallet balance
- Add money, withdraw, and send money
- Transaction history

### 🧑‍💼 Agent Dashboard

- Manage customer deposits and withdrawals
- Commission tracking

### 👨‍💻 Admin Dashboard

- Manage users and agents
- Approve/reject agents
- View overall transactions & statistics

---

## 🛠 Tech Stack

**Frontend:**

- React (with Vite + TypeScript)
- React Router
- Redux Toolkit & RTK Query
- Tailwind CSS

**Backend (for API consumption):**

- Node.js + Express (REST API)
- MongoDB + Mongoose
- JWT + bcrypt (Authentication)

---

# 📂 Project Structure
```base
src/
├── assets/                # Static assets (images, icons, fonts, etc.)
│
├── components/            # Reusable UI components (buttons, modals, forms, etc.)
│
├── features/              # Feature-based state slices & API integrations
│   ├── auth/              # Authentication (login, register, session handling)
│   ├── users/             # User management (profiles, roles, permissions)
│   ├── wallet/            # Wallet operations (balance, deposits, withdrawals)
│   └── transactions/      # Transaction history (lists, details, filters)
│
├── hooks/                 # Global custom hooks (e.g., useAuth, useDebounce)
│
├── layouts/               # Layout components (Admin, Agent, User dashboards)
│
├── pages/                 # Route-level pages (mapped to React Router routes)
│
├── routes/                # Centralized routing setup & protected route logic
│
├── services/              # API services (RTK Query base API, endpoints)
│
├── store/                 # Redux store configuration, middlewares
│
├── types/                 # Global TypeScript types & interfaces
│
├── utils/                 # Helper functions (formatters, validators, constants)
│
├── App.tsx                # Root App component (providers, routes, layouts)
└── main.tsx               # Application entry point (ReactDOM render, StrictMode)
```
---

## ⚙️ Installation & Setup

Clone the repository, install dependencies and run the project:

```bash
git clone https://github.com/sumon-chandra/digital-wallet-frontend.git
cd digital-wallet-frontend

pnpm install

pnpm run dev
```


## 🔑 Environment Variables

Create a .env file in the project root:

```bash
VITE_API_BASE_URL=
```

## 👨‍💻 Author

Built with ❤️ by Sumon Chandra
