# Node.js Fastify API

A simple and efficient REST API built with Node.js and Fastify framework, demonstrating basic CRUD operations and database integration.

## 🚀 Features

- Fast and low overhead web framework using Fastify
- CRUD operations for managing transactions
- SQLite database integration
- Request validation using Zod
- Environment configuration support
- Knex query builder for database operations

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/GbrLomenha/node.js-fastfy.git
cd node.js-fastfy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
DATABASE_URL="./db/app.db"
NODE_ENV="development"
```

4. Run database migrations:
```bash
npm run knex -- migrate:latest
```

## 🚦 Running the Application

### Development mode:
```bash
npm run dev
```

### Production mode:
```bash
npm run build
npm start
```

## 📝 API Endpoints

### Transactions

- `GET /transactions` - List all transactions
- `GET /transactions/:id` - Get a specific transaction
- `POST /transactions` - Create a new transaction
- `PUT /transactions/:id` - Update a transaction
- `DELETE /transactions/:id` - Delete a transaction

### Request Body Example (POST/PUT)

```json
{
  "title": "Transaction Title",
  "amount": 1000,
  "type": "credit"
}
```

## 🧪 Running Tests

```bash
npm test
```

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [Zod](https://github.com/colinhacks/zod)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✍️ Author

Gabriel Lomenha - [GitHub Profile](https://github.com/GbrLomenha)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- Make sure to handle environment variables properly in production
- The application uses SQLite by default, but can be configured to use other databases
- Follow the coding style and conventions used in the project

---

Feel free to customize this README according to your specific needs and add any additional sections that might be relevant to your project.
