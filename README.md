
# 🛒 [Basket BNS — E-Commerce Platform](https://basket-bns.vercel.app/)

<p align="center"> 
  <a href="https://basket-bns.vercel.app/"> 
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo" /> 
  </a> 
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=github" alt="Build Passing" /> 
  <img src="https://img.shields.io/badge/Next.js-15.5-000000?style=for-the-badge&logo=next.js" alt="Next.js" /> 
  <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL" /> 
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" /> 
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux" alt="Redux Toolkit" /> 
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /> 
</p>

- Basket BNS is a modern full-stack e-commerce platform built with Next.js 15.5 (frontend & backend), Redux Toolkit (state management), and PostgreSQL (database).
  The platform provides a seamless shopping experience for customers while offering powerful management tools for administrators.

## 🚀 Features

### 👤 User Dashboard

- View all orders with real-time status tracking.
- Cancel orders before shipment.
- Update account details (name, email, phone, address, password).
- Responsive design for mobile and desktop.

### 🛠️ Admin Dashboard

- Manage Categories, Brands, and Products (Add, Edit, Delete).
- Track and manage all customer orders.
- Manage users (update or deactivate accounts).
- Admin profile management.

## 🔍 Search & Filters

- Search products by name.
- Filter by Brand, Category, and Price range.

## ⚡ State Management

- **Redux Toolkit** is used for managing the global state, ensuring high performance and scalability for complex workflows.

---

## 📸 Screenshots

### 🏠 Home Page
![Basket E-Commerce Home](./home_screenshot.png)

### 🛍️ Product Page
![Basket E-Commerce Product](./product_screenshot.png)

### 📊 Dashboard
![Basket E-Commerce Dashboard](./dashboard_screenshot.png)

---

## 📊 Other Highlights

- Optimized server-side rendering (SSR) with Next.js.
- Scalable PostgreSQL database integration.
- Secure authentication & authorization.
- State Management powered by Redux Toolkit.
- Clean UI designed from Figma.

## 🗂️ Project Structure

```
basket-bns/
├── public/              # Static assets (images, icons, etc.)
├── prisma/              # Prisma schema & migrations
├── src/
│   ├── app/             # Next.js App Router pages & APIs
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── libs/            # Prisma client & utilities
│   ├── Feature/         # Redux Toolkit (state management)
│   ├── Interface/       # Global Interface
│   └── types/           # TypeScript types
├── .env                 # Environment variables
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation

```

## 🛠️ Tech Stack

- Frontend: Next.js 15.5, TypeScript, Tailwind CSS
- Backend: Next.js API Routes
- Database: PostgreSQL with Prisma ORM
- State Management: Redux Toolkit
- Deployment: Vercel
- Design Source: Figma

## 🌍 Future Improvements

- Multi-language support (English / Arabic).
- Multi-currency support (USD, EGP, SAR, etc.).
- Wishlist & Favorites system.
- Advanced analytics for Admin Dashboard.
- Payment gateway integration (Stripe, PayPal).

## ▶️ Usage (Demo Steps)

### Visit the Website:

👉 [Basket BNS Live Demo](https://basket-bns.vercel.app/)

- **Sign Up / Log In:** Create a new account or log in with existing credentials.
- **Browse Products:** Use the search bar or filters (brand, category, price).
- **Add to Cart & Place Order:** Select products and add them to your cart, then proceed to checkout.
- **Track Orders:** Go to the User Dashboard to view your orders, check status updates, and cancel if still pending.
- **Admin Access (for testing):** Log in as an admin to manage products, categories, brands, users, and orders.

## ⚙️ Installation & Local Setup (For Developers)

```
# 1. Clone the repository
git clone https://github.com/abdalla-yahia/basket-bns.git

# 2. Navigate into the project folder
cd basket-bns

# 3. Install dependencies
pnpm install
# or
npm install

# 4. Create a .env file in the root directory
# Add your PostgreSQL connection string:
DATABASE_URL="postgresql://username:password@localhost:5432/basket_bns"

# 5. Run Prisma migrations
pnpm prisma migrate dev

# 6. Start the development server
pnpm dev

```

👉 The app will now be running on http://localhost:3000

## 👨‍💻 Developer

**This project was fully developed by Abdalla Yahia as a training task on the Web_Master platform.**  
- The entire development (frontend + backend + database) was done independently without external help.  
- The design was provided in Figma, and I transformed it into a working full-stack application.

📍 **Location:** Beni-Suef, Egypt  
📧 **Email:** abdallayahia75@gmail.com  
🔗 **LinkedIn:** [linkedin.com/in/abdalla-yahia](https://linkedin.com/in/abdalla-yahia)  
💻 **GitHub:** [github.com/abdalla-yahia](https://github.com/abdalla-yahia)  
📱 **Phone:** +2012-111-00554
