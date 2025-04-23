# React + Vite

# 🏥 MedConnect — Medical Appointment Booking Application

**MedConnect** is a modern, responsive, and production-grade **React-based web application** designed for scheduling and managing doctor appointments with a seamless user experience. Built with **cutting-edge frontend technologies**, this project integrates interactive UI components, client-side routing, persistent state management, and real-time data visualization using **Recharts**. Ideal for healthcare startups, clinic management platforms, or developers exploring full-stack healthcare solutions.

## 🔗 Live Demo

🚀 [View Live Site](https://doctalk-syedafairooznawal.netlify.app/)  

---

## ✨ Key Features

- ⚡ **Single Page Application (SPA)** powered by React & React Router
- 📊 **Appointment Fee Analytics** with **Recharts**
- 💾 **State Persistence** using **localStorage**
- 🧠 **React Hooks**: useState, useEffect, useLocation
- 💬 **Toast Notifications** for user feedback
- 🔄 **Route-Level Loading States** and fallback UI
- 🔒 Validations on appointment availability
- 📱 Fully **responsive** and mobile-optimized
- 📝 **Dynamic blog content** explaining key React concepts

---

## 🧱 Tech Stack

| Frontend       | State Management | Data Visualization | Animations      | Routing        |
|----------------|------------------|--------------------|------------------|----------------|
| React          | useState, useEffect | Recharts          | react-countup   | React Router DOM |
| Tailwind CSS   | localStorage     |                    | Custom Loaders  |                |

---


---

## 🖥️ Pages Overview

### 🔝 Navbar

- Persistent across all routes (including 404)
- Includes site logo, 4 nav menus, and a call-to-action button

### 🏠 Homepage

- 🎯 **Banner** with gradient background, center-aligned text, and images
- 👨‍⚕️ **Doctors Section** with 6 doctor cards (Show All to reveal all 12)
- 📈 **Success Metrics** with 4 stat cards using **react-countup**

### 👨‍⚕️ Doctor Details

- Detailed view of doctor info with "Doctor’s Profile Details" card
- Availability shown with badges
- 💡 **"Book Now" behavior**:
  - ✅ Creates appointment if available
  - ❌ Error if already booked

### 📅 Booking Page

- Lists all appointments in a 1-column layout
- Cancel button with instant update to chart and localStorage
- Fallback UI if no appointments exist

### 📝 Blogs Page

- In-depth blogs answering:
  - What is `useState` and how does it work?
  - Role of `useEffect` in component lifecycle
  - Custom Hooks: why and when
  - Controlled vs. Uncontrolled Components
  - New React Hook: `useFormStatus()`

### ❌ Error Page

- Triggered for invalid or dynamic routes
- Shows Navbar, excludes Footer
- Includes a "Go to Homepage" button

---

## 📊 Charts & Visual Analytics

- Fee-based appointment visualization with **Recharts**
- Dynamic updates upon appointment cancelation
- Conditionally rendered (not shown if no data)

---

## 🔄 Dynamic Behaviors

- 🚧 **Loading animation** on every route change
- 🔁 **Fallback loaders** for data fetching on reloads
- 🕵️‍♂️ Invalid dynamic routes display relevant error messages
- 📝 **Dynamic document titles** with `useLocation()` (e.g., “Booking”, doctor’s name)

---

## 🎯 Bonus Features (Optional, but Implemented)

- ✅ Booking validation based on real-time availability
- ✅ Unavailable doctor badges
- ✅ Responsive design for all devices

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fairooz-nawal/Doctor-Talk-App.git
cd Doctor-Talk-App
npm i
npm run dev
```
### For Live Site Conversion
```bash
npm run build
upload the dist folder in netlify
In site conversion change the site name as you like
to solve reload issue in Netlify:
add _redirect file in public folder
inside -redirect file add /*    /index.html   200
```







