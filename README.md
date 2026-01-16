## 🍽️ Smart Food Donation & Redistribution System

A web-based solution to streamline food donation and distribution using AI and real-time maps.


## ✅ Features Included in This Version

✔️ **Homepage**  
✔️ **Donor Dashboard** with Google Sign-In  
✔️ **Food Donation Form**  
✔️ **NGO Dashboard** with Google Sign-In  
✔️ **AI Freshness Detection** using Teachable Machine  
✔️ **Real-time Google Maps** showing food availability  
✔️ **Firebase Integration** for Auth, Database, and Hosting


## 🔍 Project Structure

| File                | Description                                                                |
|---------------------|----------------------------------------------------------------------------|
| `home.html`         | Homepage with Sign-In dropdown (Donor / Receiver)                          |
| `don.html`          | Donor dashboard with "Proceed to Donation" button                          |
| `donate.html`       | Food donation form (Name, Contact, Food Type, etc.)                        |
| `food.html`         | AI-based food freshness detection via webcam or upload                     |
| `Mapindex.html`     | Google Maps page showing food availability pins                            |
| `firebase.js`       | Firebase config and initialization                                         |
| `donate.js`         | Handles form submission and stores data in Firebase                        |
| `Mscript.js`        | Initializes Google Maps with data from Firebase                            |
| `style.css`         | Styling for all the pages                                                  |
| `README.md`         | This file                                                                  |

---

## 🧠 AI Integration

- Implemented with [Teachable Machine](https://teachablemachine.withgoogle.com/)  
- Users upload food image ➜ AI classifies it as "Fresh" or "Stale"  
- If fresh, users proceed to donation form


## 🌐 Hosting
This project is hosted on **Firebase Hosting** for online accessibility.


## 🔒 Authentication
- Donors and receivers sign in with **Google Authentication (Firebase Auth)**
- Based on user role, they're redirected to their respective dashboards


## 📍 Real-Time Maps
- Google Maps API shows real-time **pins of available food donations**
- Maps dynamically update with data from Firestore


## 📌 How to Run Locally

1. Clone the repo or download as ZIP  
2. Open `home.html` in your browser  
3. Sign in and start donating!


```markdown
Try Smart Food Donation here: https://smart-food-donation-f569a.web.app


