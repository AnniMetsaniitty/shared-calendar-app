# 📅 Shared Calendar App

A modern, easy-to-use calendar application built with **React** and **Vite**.  
Add, edit, and view events in a shared calendar—great for learning React concepts like Context, custom hooks, and localStorage persistence.

---

[![Live Demo](https://img.shields.io/badge/Live%20Demo-online-red?style=for-the-badge)](https://react-shared-calendar.netlify.app/)

---

## ✨ Features

- **Monthly Calendar View** with interactive day selection
- **Add, Edit, and Delete Events** with title, description, and time
- **Multiple Users** (simulated; pick a user to see their events)
- **Color Highlights** for today and selected days
- **Data Persistence** using browser localStorage (no backend needed)
- **Responsive Design** for desktop and mobile
- Built with **React Context** and **Custom Hooks** for state and logic

---

## 🚀 How to Run the Application

### **1. Clone the Repository**

```sh
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### **2. Install Dependencies**

You need [Node.js](https://nodejs.org/) installed (version 16 or higher recommended).

```sh
npm install
```

### **3. Start the Development Server**

```sh
npm run dev
```

The app will print a local address (usually `http://localhost:5173`).
Open this in your browser to use the Shared Calendar!

---

## 📝 To do

- Add SQL database integration for persistent storage
- Replace localStorage with backend API for events

---

## ⚡ Usage Tips

- **Choose a User:** Select a user from the dropdown to create/view events as that user.
- **Export Events:** Use the Export buttons to download your events or all events as CSV/JSON.
- **No login required!** All event data is saved in your browser’s localStorage.
- To reset the calendar, clear your browser’s local storage for this site. This means that, **all of your data will be lost when resetting the calendar.** Update coming soon...

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google Fonts: Roboto](https://fonts.google.com/specimen/Roboto)

---

## 🎓 Learning Goals

This project demonstrates:

- Component-driven UI design in React
- Using **React Context** for global state (users, events)
- Writing **Custom Hooks** for reusable calendar logic

---
