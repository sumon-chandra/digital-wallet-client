# 💳 Digital Wallet Frontend (React + Redux Toolkit + RTK Query)

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

## 📂 Project Structure

src/
├── assets/ # Images, icons
├── components/ # Reusable components (UI, layouts, etc.)
├── features/ # Feature-based slices & API integrations
│ ├── auth/ # Authentication
│ ├── users/ # User management
│ ├── wallet/ # Wallet operations
│ └── transactions/ # Transaction history
├── hooks/ # Global custom hooks
├── layouts/ # Role-based layouts (Admin, Agent, User)
├── pages/ # Route-level pages
├── routes/ # Routing setup & protected routes
├── services/ # RTK Query base API config
├── store/ # Redux store setup
├── types/ # TypeScript types
├── utils/ # Helper functions (formatters, constants)
├── App.tsx # Root App component
└── main.tsx # Entry point

---

## ⚙️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/sumon-chandra/digital-wallet-frontend.git
cd digital-wallet-frontend
```

```bash
pnpm install
```

```bash
pnpm run dev
```

## 🔑 Environment Variables

Create a .env file in the project root:

```bash
VITE_API_BASE_URL=
```

## 👨‍💻 Author

Built with ❤️ by Sumon Chandra
