# Hangry Food Delivery App 🍔🚀

A full-stack **Food Delivery Web Application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project allows users to browse food items, add them to a cart, and place orders seamlessly.

---

## 🚀 Features

- User authentication (signup/login)
- Browse food items with images, descriptions, and prices
- Add to Cart / Remove from Cart functionality
- Order placement and checkout flow
- MongoDB integration for storing users, food items, and orders
- Responsive UI with React.js
- RESTful API with Express.js & Node.js

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Context API (for state management)
- Axios (for API requests)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

---

## 📂 Project Structure

```
Hangry_Food_Delivery/
│── backend/        # Node.js + Express + MongoDB
│   ├── models/     # Mongoose models (User, Food, Order)
│   ├── routes/     # API routes
│   ├── server.js   # Entry point for backend
│
│── frontend/       # React.js frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # StoreContext for state
│   │   ├── pages/       # Pages (Home, Cart, etc.)
│
│── README.md       # Project documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/harika1807/Hangry_Food_Delivery.git
cd Hangry_Food_Delivery
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 📸 Screenshots (Optional)
(Add screenshots of your app UI here)

---

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License
This project is open-source and available under the MIT License.
