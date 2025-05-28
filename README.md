# 🧪 Cloud IB Test Project

A test project built for **Cloud IB** using **React**, **TypeScript**, and **Vite**.  
Includes modern tooling, type-safe linting, custom UI components, and theming support.

---

## ✨ Features

- **Custom Table and Modal Components** (UI logic in place, animations pending)
- **PostCSS** with `css-vars` for flexible styling
- **Dark mode support**
- **Strict typing with ESLint/TS integration**
- **Modular project structure**

---

## 🕒 Not Implemented Due to Time Constraints

- Improving table component performance
- Adding loading indicators throughout the app
- Test coverage (unit tests for the table component as a priority)
- More thorough component decomposition
- Implementation of TabSwitch with animation
- Backend with JWT authentication and integration with RTK Query
- Button component polishing
- Refactoring and enforcing a consistent style using eslint (e.g., import order)
- Setting up Turborepo and moving UI into a separate package
- Custom select component with dropdown

---

## 🚀 Getting Started

### 📦 Prerequisites

- **Node.js** v22.14 or higher _(tested and recommended)_
- **Yarn** package manager

> Don't have Yarn?  
> [Install Yarn →](https://classic.yarnpkg.com/en/docs/install/)

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/ikorchagin/cloud-ib.git

# Navigate to the root
cd cloud-ib

# Install dependencies
yarn
```

---

## 🔧 Development

### 1. Start the **client** (frontend)

```bash
yarn dev
```

### 2. Start the **server** (backend)

```bash
yarn dev:server
```

> ⚠️ **Important:** The server must be running concurrently with the client for the app to function correctly.

---

## 🧹 Code Quality & Linting

This project uses a strict ESLint setup based on type-checked rules and React best practices:

- `@typescript-eslint` with `recommendedTypeChecked`
- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`
- Stylistic & accessibility rules included

To lint the project:

```bash
yarn lint
```

---

## 🎨 Styling & Theming

- Uses **PostCSS** with `css-vars` for scalable theming
- Supports **dark mode** out of the box
- Easily extendable with your own design tokens and components

---

## 📚 Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [ESLint Plugin React X](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-x)
- [Yarn CLI Reference](https://classic.yarnpkg.com/en/docs/cli/)

---

## 📝 License

MIT © ikorchagin
