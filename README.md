# Task Flow Dashboard

A modern, single-page React application for task management, built for the Frontend Intern Dashboard Development Task. This project features a secure login system and a dynamic dashboard, closely following the provided design and integrating with a REST API.

## 🌟 Screenshots

<!-- Replace these URLs with your actual screenshot links -->
![Login Page](https://your-cloud-url.com/login-screenshot.png)
![Dashboard](https://your-cloud-url.com/dashboard-screenshot.png)
![Analytics](https://your-cloud-url.com/analytics-screenshot.png)

## 🚀 Tech Stack

- **React 19** (with Vite)
- **TypeScript**
- **Tailwind CSS** (via @tailwindcss/vite)
- **Framer Motion** (animations)
- **React Router v7**
- **Axios** (API calls)
- **Lucide React & React Icons** (icons)
- **Sonner** (notifications)
- **ESLint** (code quality)

## 📁 Folder Structure

```
src/
  assets/           # Images and static assets
  components/
    dashboard/      # Dashboard widgets & analytics
    layout/         # Header, SideNav
    login/          # Login form & hero
  data/             # Static data
  helpers/          # Utility functions
  hooks/            # Custom React hooks
  lib/              # Axios config
  routes/           # App routes & protected route logic
  services/         # API service layer
  types/            # TypeScript types
  index.css         # Global styles
  main.tsx          # App entry point
```

## ✨ Features

- **Login System:** Secure authentication using JWT tokens via REST API.
- **Protected Dashboard:** Accessible only after login.
- **Logout Functionality:** Easily log out and clear session.
- **Modern UI:** Responsive, animated, and visually appealing.
- **REST API Integration:** Real-time data fetching and display.
- **Component-Based Structure:** Clean, maintainable code.
- **Notifications:** User feedback for actions and errors.
- **Responsive Design:** Works across devices and screen sizes.

## 📝 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taskflow-dashboard.git
   cd taskflow-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## 🔒 Authentication

- **Login Endpoint:** `POST /api/login`
- **Body Example:**
  ```json
  {
    "email": "user1@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "email": "user1@example.com",
    "token": "<jwt_token>"
  }
  ```
- Token is stored securely for session management and used for protected routes.

## 📄 Task Details

- [Dribbble Design](https://dribbble.com/shots/25241984-Task-Management-Dashboard)
- [REST API](https://task-api-eight-flax.vercel.app/)
- [Submission Form](https://forms.gle/j3mAyzzWA5vjcaQJ8)

## 📬 Contact

For any queries, reach out to: muntahi1212@gmail.com

## 🕒 Submission Deadline

**Feb 28, 2026 10:00 PM GMT+6**
