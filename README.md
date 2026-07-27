# 🩺 Doctor Appointment Booking System

A full-stack **Doctor Appointment Booking System** built using the **MERN Stack** that streamlines the process of booking, managing, and tracking medical appointments. The platform provides dedicated interfaces for **Patients**, **Doctors**, and **Administrators**, offering a secure and user-friendly healthcare management experience.

---

# 🌟 Project Overview

The Doctor Appointment Booking System is designed to simplify appointment scheduling by allowing patients to find doctors, book appointments, and manage their bookings online. Doctors can manage their availability and appointments, while administrators oversee users, doctors, and the overall platform.

This project demonstrates real-world full-stack development concepts including authentication, REST APIs, role-based access control, database management, and responsive UI development.

---

# ✨ Features

## 👤 Patient Module

* Secure User Registration & Login
* Browse Available Doctors
* Search & Filter Doctors
* View Doctor Profiles
* Book Appointments
* Cancel Appointments
* Appointment History
* Update Profile
* Responsive Dashboard

---

## 👨‍⚕️ Doctor Module

* Doctor Login
* Manage Profile
* View Upcoming Appointments
* Accept / Reject Appointments
* Update Availability
* Appointment Schedule
* Earnings Overview *(Optional)*
* Dashboard Analytics

---

## 🛡️ Admin Module

* Admin Authentication
* Dashboard Overview
* Manage Patients
* Manage Doctors
* Add New Doctors
* Approve Doctor Accounts
* Manage Appointments
* Platform Statistics

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Axios
* HTML5
* CSS3
* JavaScript (ES6+)

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* Multer *(if image upload is used)*
* dotenv
* CORS

---

## Database

* MongoDB Atlas / Local MongoDB

---

# 📂 Project Structure

```text
doctor-appointment-system/
│
├── frontend/            # React Application
├── backend/             # Express Server
├── README.md
├── package.json
└── .gitignore
```

---

# 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for secure authentication.

Supported Roles:

* 👤 Patient
* 👨‍⚕️ Doctor
* 🛡️ Admin

Each role has protected routes and different permissions.

---

# 📊 Database Collections

* Users
* Doctors
* Appointments
* Admin
* Payments *(Optional)*

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/Meghabyte08/doctor-appointment-system.git
```

```bash
cd doctor-appointment-system
```

---

## 2. Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd ../backend
npm install
```

---

## 3. Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

*(Remove Cloudinary variables if your project does not use image uploads.)*

---

## 4. Run the Project

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run dev
```

---


# 💡 Key Functionalities

* User Authentication
* Role-Based Authorization
* Doctor Management
* Appointment Scheduling
* CRUD Operations
* RESTful API Integration
* Secure Password Encryption
* Responsive User Interface
* Form Validation
* Database Integration

---

# 📚 What I Learned

During this project, I gained practical experience in:

* Building scalable MERN applications
* Designing REST APIs
* MongoDB Schema Design
* JWT Authentication & Authorization
* State Management in React
* API Integration using Axios
* Error Handling
* Role-Based Access Control
* Git & GitHub Version Control
* Deploying Full-Stack Applications

---

# 🚀 Future Improvements

* 💳 Online Payment Integration
* 📧 Email Notifications
* 📱 SMS Appointment Reminders
* 🔔 Push Notifications
* 📹 Video Consultation
* 💬 Real-Time Chat
* ⭐ Doctor Reviews & Ratings
* 📄 Medical Records Management
* 🌙 Dark Mode
* 🌍 Multi-language Support

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is created for educational and portfolio purposes.

---

# 👨‍💻 Author

**Megha Kumari**

🎓 B.Tech in Information Technology (2025)

* GitHub: https://github.com/Meghabyte08
* LinkedIn: *(Add your LinkedIn profile URL here)*

---

# ⭐ Support

If you found this project useful:

⭐ Star this repository

🍴 Fork it

📝 Share your feedback

Thank you for visiting this project!
