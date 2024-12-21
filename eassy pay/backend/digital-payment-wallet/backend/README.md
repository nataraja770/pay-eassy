# Digital Payment Wallet Backend

This is the backend for the Digital Payment Wallet application, built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/digital-payment-wallet.git
   ```

2. Navigate to the backend directory:
   ```
   cd digital-payment-wallet/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `server.js`.

## Usage

To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Authenticate a user
- **GET /api/wallets** - Retrieve user wallets
- **POST /api/transactions** - Create a new transaction

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.