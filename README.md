# 🌱 Plant Management System

A simple **MERN stack application** that allows users to manage plants.  
- **Admins** can add new plants.  
- **Users** can view available plants.  
- Basic authentication (login, signup, profile) included.  

---

## 🚀 Features
- User Authentication (Signup / Login / Profile)
- Role-based access:
  - **Admin** → Can add plants
  - **User** → Can only view plants
- Plant Management (Add, View Plants)
- Protected Routes (only logged-in users can access dashboard/plants)
- Cookies & LocalStorage for session management

---

## 🛠️ Tech Stack
- **Frontend**: React, React Router, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT, Cookies  

---

## 📂 Project Structure
├── backend
│   ├── package.json
│   └── src
│       ├── app.js
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   ├── authController.js
│       │   └── plantController.js
│       ├── middleware
│       │   └── auth.js
│       ├── models
│       │   ├── plant.js
│       │   └── user.js
│       ├── routes
│       │   ├── authRoutes.js
│       │   └── plantRoutes.js
│       └── server.js
├── frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── api
│   │   │   └── axios.js
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PlantCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── AddPlantForm.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PlantList.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Signup.jsx
│   │   └── utils
│   │       └── auth.js
│   └── vite.config.js
└── README.md


---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/Lakshman76/urvann-plant-store.git
cd urvann-plant-store

### 2. Setup Backend
cd backend
npm install

### 3. Create a .env file inside backend/ with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173

### 4. Start the backend server
npm run dev

### 5. Setup Frontend
cd ../frontend
npm install

### 6. Start the frontend server
npm run dev
```
## 🔑 Usage

1. Signup as a new user (default role: user).

2. Login with your credentials.

3. If you are an admin, you can add new plants.

4. If you are a user, you can view plants only.
