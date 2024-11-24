# Bicycle Store

## 🔗Live Link

http://localhost:5000/api/

## Project Overview

The Bicycle Store API is a RESTful application developed using **Express.js** and **TypeScript**, integrating **MongoDB** with **Mongoose** to manage a Bicycle Store. This application allows CRUD operations for bicycles and orders and features robust inventory management.

## Key Features

1. **Product Management:**

   - Create, read, update, and delete bicycles.
   - Search bicycles by name, brand, or type.

2. **Order Management:**

   - Place orders, reduce inventory automatically, and update stock availability.
   - Error handling for insufficient stock.

3. **Revenue Calculation:**

   - Aggregates and calculates total revenue from all orders.

4. **Error Handling:**
   - Descriptive error responses for validation, resource not found, and server issues.

## API Endpoints

### Product Endpoints

- **POST** `/api/products`: Create a new bicycle.
- **GET** `/api/products`: Retrieve all bicycles (with `searchTerm` query).
- **GET** `/api/products/:productId`: Retrieve a specific bicycle by id.
- **PUT** `/api/products/:productId`: Update a bicycle's information.
- **DELETE** `/api/products/:productId`: Delete a bicycle by id.

### Order Endpoints

- **POST** `/api/orders`: Place a new order.
- **GET** `/api/orders/revenue`: Calculate total revenue.

---

## Setup Instructions

1. **Clone the Repository**

```bash

   git clone https://github.com/Springhawk27/bicycle-store-backend.git

   cd bicycle-store-backend

```

2. **Install Dependencies**

```bash

   npm install

```

3. **Set Environment Variables**
   Create a .env file and configure the following:

```bash

   npm install
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=mongodb+srv://<your-mongo-db-connection-string>

```

4. **Run the Application**

```bash

   npm run start:dev

```
