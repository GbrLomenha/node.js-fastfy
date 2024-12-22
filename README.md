# Node.js Fastify API

A simple and efficient REST API built with Node.js and Fastify framework, demonstrating basic CRUD operations and database integration.

## 🚀 Features

- Fast and low overhead web framework using Fastify
- CRUD operations for managing resources
- SQLite database integration
- Request validation using JSON Schema
- Environment configuration support

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/GbrLomenha/node.js-fastfy.git
```

2. Navigate to the project directory:
```bash
cd node.js-fastfy
```

3. Install dependencies:
```bash
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root directory and add your configuration:

```env
PORT=3000
HOST=localhost
```

## 🏃‍♂️ Running the Application

### Development mode
```bash
npm run dev
```

### Production mode
```bash
npm start
```

## 🔄 API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Request & Response Examples

### GET /users
Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]
```

### POST /users
Request:
```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

Response:
```json
{
  "id": 3,
  "name": "New User",
  "email": "newuser@example.com"
}
```

## 🛠️ Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Fastify](https://www.fastify.io/) - Web framework
- [PrismaORM](https://www.prisma.io/) - ORM

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- Gabriel Lomenha
- GitHub: [@GbrLomenha](https://github.com/GbrLomenha)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✨ Acknowledgments

- Fastify documentation and community
- Node.js community

---
⌨️ with ❤️ by [Gabriel Lomenha](https://github.com/GbrLomenha)
