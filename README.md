# 🍔 Local Food Lovers Network (Client)

**Live Site:** https://your-live-site-url.netlify.app  
**Server Repo:** https://github.com/your-username/foodlovers-server  
**Client Repo:** https://github.com/your-username/foodlovers-client  

---

## 📖 Project Overview
**Local Food Lovers Network** is a community platform where users can share their food experiences, discover local dishes, and connect with other food enthusiasts.  
Users can post reviews with images, edit or delete them, and favorite other people’s posts — all within a beautifully designed, fully responsive interface.

---

## ✨ Core Features
- 🔐 **Firebase Authentication** — Email/Password + Google Login  
- 📝 **Add / Edit / Delete Reviews** — users can manage their own posts  
- ❤️ **Favorite System** — add and view your favorite reviews  
- 🔍 **Search System** — server-side search using MongoDB `$regex`  
- 🌟 **Top Rated Section** — shows highest-rated reviews dynamically  
- 🧭 **Protected Routes** — Firebase session persists on reload  
- 🔔 **SweetAlert2 / Toast Notifications** — no `alert()` used  
- 📱 **Responsive Design** — works on mobile, tablet, and desktop  
- 💾 **MongoDB Integration** — reviews and favorites stored in DB  

---

## 🖥️ Technologies Used
| Category | Tech Stack |
|-----------|-------------|
| **Frontend** | React (Vite), Tailwind CSS |
| **Routing** | React Router DOM |
| **Forms** | React Hook Form |
| **Auth** | Firebase Authentication |
| **UI / UX** | SweetAlert2, React Hot Toast, Lucide Icons |
| **Animation** | Framer Motion |
| **Data Fetching** | Fetch API / Axios |
| **Backend** | Express.js, MongoDB (Vercel Hosted API) |

---

## 📁 Folder Structure
/src
├── assets/
├── components/
├── pages/
├── hooks/
├── router/
├── firebase.js
├── App.jsx
└── main.jsx


> 🔸 When deploying to **Netlify / Surge**, make sure to add these same environment variables in the site settings and add your domain in **Firebase Authorized Domains**.

---

## 🚀 Run Locally
```bash
# clone the repo
git clone https://github.com/your-username/foodlovers-client
cd foodlovers-client

# install dependencies
npm install

# start dev server
npm run dev
