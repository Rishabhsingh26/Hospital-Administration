# Patient Management System API

Built as part of B.Tech, 4th SEMESTER MSE-1 EXAMINATION.

## Features
- Register new patients
- View all patient records
- Update patient details
- Delete patient records
- Search patients by name or disease

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/patients` | Register a new patient |
| GET | `/patients` | Get all patient records |
| GET | `/patients/:id` | Get patient by ID |
| PUT | `/patients/:id` | Update patient details |
| DELETE | `/patients/:id` | Delete patient record |
| GET | `/patients/search?name=xyz` | Search patient by name |

## Setup
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with `MONGODB_URI` and `PORT`
4. Run `npm start`
