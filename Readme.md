# 🌍 JoyTravel Website

A full-stack web application for luxury travel booking.  
Built with **Laravel (Backend)** + **React Vite (Frontend)**.

---

## 📂 Project Structure

```
ceylontravelx/
 ├── backEnd-Laravel/   # Laravel API & Authentication (PHP, MySQL)
 └── frontend-ReactVite/     # React Vite Frontend (TypeScript, Tailwind, Axios)
```

---

## ⚡ Features
- User & Admin Authentication (Laravel Sanctum)
- Contact form with MySQL storage
- React frontend connected to Laravel API
- Responsive UI with Tailwind CSS
- API communication with Axios

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS  
- **Backend:** Laravel 10, PHP 8+, Sanctum  
- **Database:** MySQL (phpMyAdmin)  
- **Deployment:** Vercel (Frontend) + Railway/Heroku/Render (Backend)  

---

## 🚀 Setup & Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Kavishathejan/JoyTravel-website-React-vite-Laravel.git

```

---

### 2️⃣ Backend Setup (Laravel)
```bash
cd backEnd-Laravel

# Install dependencies
composer install

# Copy .env
cp .env.example .env

# Generate key
php artisan key:generate

# Run migrations
php artisan migrate

# Start backend server
php artisan serve
```
Backend will run on 👉 `http://localhost:8000`

---

### 3️⃣ Frontend Setup (React Vite)
```bash
cd frontend-ReactVite

# Install dependencies
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:8000/api" > .env

# Start dev server
npm run dev
```
Frontend will run on 👉 `http://localhost:5173`

---


## 👨‍💻 Authors
- Kavisha Dulanjana  

