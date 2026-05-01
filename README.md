# Paradise Nursery 🌿

## Project Name: Paradise Nursery — Online Plant Shop

Welcome to **Paradise Nursery**, a dynamic e-commerce web application built with React and Redux for plant lovers everywhere.

## About the Project

Paradise Nursery is a React-based shopping cart application that allows users to:

- Browse plants organized into multiple categories
- View plant details including thumbnail images, names, descriptions, and prices
- Add plants to a shopping cart
- Manage cart items (increase/decrease quantity, remove items)
- View total cost per item and overall cart total dynamically

## Tech Stack

- **React** — UI components and page routing
- **Redux Toolkit** — Global state management for the shopping cart
- **CSS3** — Custom styling and animations

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
e-plantShopping/
├── public/
├── src/
│   ├── App.jsx         — Landing page with company name and Get Started button
│   ├── App.css         — Global styles including background image
│   ├── AboutUs.jsx     — Company details and mission
│   ├── ProductList.jsx — Plant listings grouped by category
│   ├── CartItem.jsx    — Shopping cart page
│   └── CartSlice.jsx   — Redux slice for cart state management
└── README.md
```

## Plant Categories

- 🌿 Air Purifying Plants
- 🌸 Aromatic Fragrant Plants
- 🪲 Insect Repellent Plants
- 💊 Medicinal Plants
- 🪴 Low Maintenance Plants

## Features

- ✅ 30+ unique houseplants across 5 categories
- ✅ Dynamic cart with real-time quantity updates
- ✅ Add to Cart buttons disable after item is added
- ✅ Cart icon shows total item count dynamically
- ✅ Navigation bar with links to Home, Plants, and Cart
- ✅ Full cart management: increment, decrement, delete
- ✅ Total cost calculated per item and for entire cart
