# RealEstate-MERN

A full-stack Real Estate application built with the MERN stack (MongoDB, Express, React, Node). This repository contains the frontend (React) and backend (Node/Express) to manage property listings, user authentication, image uploads, and search/filter functionality.

Table of contents
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started (local)](#getting-started-local)
- [API (high level)](#api-high-level)


## Demo
[Website Link](https://real-estate-mern-vg.vercel.app/)

## Features
- User authentication (register, login, JWT-based sessions)
- CRUD for property listings (create, read, update, delete)
- Image upload support (Cloudinary or local uploads)
- Search and filter properties (by city, price, type, bedrooms, etc.)
- Pagination and sorting
- Role-based access (owner/admin vs visitor) — optional depending on implementation

## Tech stack
- Frontend: React, React Router, Axios (JavaScript, CSS, HTML)
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Authentication: JWT
- Image Hosting: Cloudinary (optional)
- Dev tools: nodemon, concurrently (optional)

## Prerequisites
- Node.js (>= 14)
- npm or yarn
- MongoDB instance (local or Atlas)
- (Optional) Cloudinary account for image uploads

## Getting started (local)
1. Clone the repo
   git clone https://github.com/VedantGadge/RealEstate-MERN.git
   cd RealEstate-MERN

2. Install dependencies
   - Backend
     cd server
     npm install
   - Frontend
     cd ../client
     npm install

   (If repository layout differs, install dependencies in the appropriate folders.)

3. Configure environment variables (see next section)

4. Run locally
   - Start backend server (from /server)
     npm run dev
     (This command usually uses nodemon. If your package.json uses a different script, use that.)
   - Start frontend (from /client)
     npm start

   Or run both in parallel if a root script is provided:
     npm run dev:all
   (Adjust according to the repository scripts.)

)

## API (high level)
Typical endpoints (prefix: /api)
- POST /api/auth/register — register user
- POST /api/auth/login — login
- GET /api/properties — list properties (query params: page, limit, filters)
- GET /api/properties/:id — get property detail
- POST /api/properties — create property (protected)
- PUT /api/properties/:id — update property (protected / owner)
- DELETE /api/properties/:id — delete property (protected / owner)
- POST /api/uploads — upload images (protected)


