# eassy pay

This project is a eassy pay application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage their transactions, view their wallet balance, and perform various payment operations.

## Project Structure

```
eassy-pays
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   ├── package.json
│   └── README.md
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/auth/login**: User login
- **POST /api/auth/register**: User registration
- **GET /api/transactions**: Retrieve user transactions
- **POST /api/transactions**: Create a new transaction

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.