# Next.js Blog Site

A fully responsive **blog platform** built with **Next.js 15**, **NextAuth.js**, and **MongoDB**, featuring **user authentication**, a **dashboard** for content management, and dynamic blog pages.

---

## Features

- ✅ **User Authentication**
  - Register new users and login via credentials (email & password).  
  - OAuth login with Google.  
  - Protected dashboard accessible only to authenticated users.  

- ✅ **Dashboard**
  - Add, edit, delete posts.  
  - Posts update in real-time using **SWR**.  
  - Responsive design for mobile, tablet, and desktop.  

- ✅ **Public Blog**
  - List all posts.  
  - Individual post pages with dynamic routing.  

- ✅ **Portfolio & About**
  - Static pages to showcase your work and story.  

- ✅ **Contact Form**
  - Users can send messages via contact page.  

- ✅ **Dark/Light Mode Toggle**
  - Works across the entire website.  

- ✅ Fully responsive and optimized for all screen sizes.  

---

## Tech Stack

- **Next.js 15** + **React 19** – SSR and CSR  
- **NextAuth.js** – Authentication (credentials + Google login)  
- **MongoDB & Mongoose** – Database for users and posts  
- **SWR** – Client-side data fetching  
- **Lucide React** – Icons  
- **bcryptjs** – Password hashing  

---

## Authentication Flow

1. **Register**
   - New users can create an account via `/dashboard/register`.  
   - Passwords are hashed with `bcryptjs` before saving to MongoDB.  

2. **Login**
   - Users can log in with credentials or Google OAuth.  
   - Authenticated users are redirected to `/dashboard`.  

3. **Protected Dashboard**
   - Only accessible after authentication.  
   - Users can manage posts (add/delete).  

---

## Screenshot
![lamamia](https://github.com/user-attachments/assets/8037760c-2b4c-439b-bd36-202a748007d8)

