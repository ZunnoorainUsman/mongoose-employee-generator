# Employee Data Generator

A simple Node.js, Express.js, MongoDB, and Mongoose project that generates random employee data with a single button click.

## Features

- Generate 10 random employee records
- Clear existing records before generating new data
- Store data in MongoDB using Mongoose
- Simple EJS frontend
- Beginner-friendly project for learning Express and MongoDB

## Project Structure

```text
employee-data-generator/
│
├── data/
│   └── data.js
│
├── models/
│   └── employees.js
│
├── views/
│   └── index.ejs
│
├── main.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Employee Format

```js
{
    name: "Harry",
    salary: 45000000,
    language: "Python",
    city: "New York",
    isManager: true
}
```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd employee-data-generator
```

Install dependencies:

```bash
npm install
```

Start MongoDB and run:

```bash
node main.js
```

Open:

```text
http://localhost:3000
```

## How It Works

1. User opens the application.
2. Clicks the **Generate Data** button.
3. Existing employee records are deleted.
4. 10 new random employee records are generated.
5. Records are inserted into the `employees` collection inside the `company` database.

## What I Learned

- Express routing
- MongoDB integration
- Mongoose schemas and models
- Database CRUD operations
- EJS templating
- Random data generation
- Connecting frontend and backend

## Author

**Zunnoorain Usman**

BS Computer Science Student  
Learning Full Stack Development 🚀
