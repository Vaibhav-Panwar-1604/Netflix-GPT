# 🎬 NetflixGPT – AI-Powered Netflix Clone

NetflixGPT is a smart, fully responsive Netflix UI clone powered by React, TailwindCSS, Firebase, Redux Toolkit, TMDB API, and OpenAI GPT. It allows users to sign in, browse movies, and get intelligent GPT-powered movie suggestions in natural language.

🌐 **Live Demo**: [https://moviesgptclone.netlify.app](https://moviesgptclone.netlify.app)
---

## ✨ Features

### 🔐 Authentication
- Firebase Auth (Sign Up, Sign In, Sign Out)
- Form validation with useRef
- Update display name & profile picture
- Protected routing with redirects
- Unsubscribed `onAuthStateChanged` on unmount

### 🎞️ Movie Browsing (TMDB API)
- Now Playing and Popular movies
- Background trailer video autoplay + mute
- Title & overview overlay on banner
- Multiple reusable movie carousels
- Image rendering via TMDB CDN

### 🤖 GPT Movie Search (OpenAI)
- GPT-powered natural language search
- Multi-language support
- Smart movie suggestions using TMDB + GPT
- Result display using MovieList component
- Redux-powered GPT slice state

---

## 🧰 Tech Stack

- React + Vite
- TailwindCSS
- Redux Toolkit
- React Router DOM
- Firebase Auth
- TMDB API
- OpenAI GPT API
- Custom Hooks
- Environment Variables (.env)

---

## ⚙️ Setting Up the Project

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Vaibhav-Panwar-1604/Netflix-GPT.git
cd NetflixGPT
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```bash
touch .env
```

Then add:

```env
VITE_TMDB_API_KEY=your_tmdb_access_token
VITE_OPENAI_API_KEY=your_openai_api_key
```

✅ Note: `.env` is ignored in `.gitignore`.

---

## 🔑 Get Your API Keys

### 🎬 TMDB API Key

1. Go to https://developer.themoviedb.org
2. Log in and go to API section
3. Create a new app and copy the Access Token (v4 auth)
4. Paste it in `.env` as:

```env
VITE_TMDB_API_KEY=your_tmdb_access_token
```

---

### 🤖 OpenAI API Key

1. Go to https://platform.openai.com/account/api-keys
2. Create a new secret key
3. Paste it in `.env` as:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
```

---

## ▶️ Run the App

```bash
npm run dev
```

Then open: http://localhost:5173

---


## 👤 Author

**Vaibhav Panwar**  
GitHub: [@Vaibhav-Panwar-1604](https://github.com/Vaibhav-Panwar-1604)

---


