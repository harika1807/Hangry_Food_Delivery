# 🍔 Hangry Food Delivery App

A **MERN (MongoDB, Express, React, Node.js) food delivery application** that allows users to browse dishes, add to cart, place orders, and explore nutritional insights using the **Edamam Nutrition API**.  

## ✨ Features
- 🛒 **User Authentication** – Secure login & signup  
- 🍱 **Food Browsing** – View dishes with images, descriptions, and ratings  
- 🛍️ **Cart & Orders** – Add/remove items, checkout, and track orders  
- 🥗 **AI-Powered Health Filter (Edamam API)** – Check calories & nutrition info for each dish  
- ⚡ **Full-Stack** – React.js frontend + Node/Express backend + MongoDB database  

## 📂 Tech Stack
- **Frontend:** React.js, Axios, Context API, CSS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **API Integration:** Edamam Nutrition API  
- **Authentication:** JWT (JSON Web Tokens)  

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/harika1807/Hangry_Food_Delivery.git
cd Hangry_Food_Delivery
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `/backend` with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EDAMAM_ID=your_edamam_app_id
EDAMAM_KEY=your_edamam_app_key
PORT=5000
```

Start backend:
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Start frontend:
```bash
npm start
```

App runs at **http://localhost:3000** 🚀

## 📸 Screenshots
(Add screenshots of your app UI here: home, cart, health filter popup, etc.)

## 🔮 Future Enhancements
- 📱 Mobile-friendly design (React Native)  
- 💳 Online payment gateway integration  
- 🤖 AI-powered food recommendations  

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss.  

## 📜 License
MIT License © 2025 Harika
