# E-Commerce Website

A full-stack e-commerce application built with **React, Node.js, Express, MongoDB, and Tailwind CSS**. The project includes a customer-facing storefront, admin panel, authentication, cart management, product management, order processing, cloud image uploads, and multiple payment methods.

## Features

### User Features

- User registration and login
- JWT-based authentication
- Browse products
- Product categories and subcategories
- Product search
- Product filtering
- Product sorting
- Product size selection
- Shopping cart
- Quantity management
- Order placement
- Order history
- Responsive design

### Payment Methods

- Cash on Delivery
- Stripe
- Razorpay

### Admin Features

- Admin authentication
- Add products
- Upload multiple product images
- View products
- Delete products
- View customer orders
- Update order status

### Integrations

- **MongoDB** — Database
- **Cloudinary** — Product image storage
- **Stripe** — Online payments
- **Razorpay** — Online payments

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Cloudinary
- Stripe
- Razorpay

### Admin Panel

- React
- Vite
- Tailwind CSS
- Axios
- React Router

## Environment Variables

Create .env files in the required directories and add your own credentials.

### Backend

```bash
MONGODB_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
STRIPE_SECRET_KEY=
RAZORPAY_KEY_SECRET=
RAZORPAY_KEY_ID=
```

### Frontend

```bash
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
VITE_ADMIN_URL=
```

### Admin

```bash
VITE_BACKEND_URL=
```

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/devNiranjan7/forever.git
cd forever
```

2. Install dependencies

Install dependencies separately for each application:

```bash
cd backend
npm install
cd ../frontend
npm install
cd ../admin
npm install
```

3. Configure environment variables

Create the required `.env` files and add your MongoDB, Cloudinary, Stripe, Razorpay, JWT, and application URLs.

4. Start the backend

```bash
cd backend
npm run server
```

5. Start the frontend

```bash
cd frontend
npm run dev
```

6. Start the admin panel

```bash
cd admin
npm run dev
```

Open the URLs provided by Vite in your browser.

## Authentication

- The application uses JWT-based authentication to manage user sessions and protect authenticated operations.
- Authentication tokens are sent with API requests through request headers.
- Admin functionality is handled separately through the admin application.

## Image Management

- Product images are uploaded using Multer and stored on Cloudinary.
- The backend receives uploaded images, sends them to Cloudinary, and stores the resulting image URLs in MongoDB.

## Cart & Orders

The cart supports:

- Multiple products
- Multiple sizes
- Quantity updates
- Product removal
- Automatic cart total calculation
- Delivery charges

During checkout, users can provide delivery information and choose their preferred payment method.

## Responsive Design

The storefront is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Tailwind CSS is used throughout the application for responsive layouts and styling.

## Security Notes

- Keep all secrets inside `.env` files.
- Never expose backend secrets through `VITE_*` variables.
- Never commit `.env` files to GitHub.
- Keep payment secret keys on the backend.
- Use environment-specific credentials for development and production.

## Project Purpose

This project was built to practice and demonstrate full-stack web development, including:

- React application development
- REST API development
- Authentication
- MongoDB database integration
- Cloud image storage
- Shopping cart architecture
- Order management
- Payment gateway integration
- Admin dashboard development
- Frontend-backend communication
- Responsive UI development

## Author

**Dev Niranjan**

> Built with React, Node.js, Express, MongoDB, and a lot of debugging.
