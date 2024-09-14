# Spotify Clone

This project is a full-stack Spotify clone featuring a user-facing frontend, an admin panel, and a backend server. It aims to replicate core functionalities of Spotify, providing a platform for music streaming and management.

## Project Structure

The project is divided into three main parts:

- `frontend/`: The user-facing React application
- `admin/`: The admin panel built with React
- `backend/`: The server-side application built with Node.js and Express

## Technologies Used

- Frontend & Admin:
  - React
  - Tailwind CSS
- Backend:
  - Node.js
  - Express
- Database:
  - MongoDB
- File Storage:
  - Cloudinary

## Features

- User authentication and authorization
- Browse and search for music
- Create and manage playlists
- Play music with a custom audio player
- Admin panel for managing users, artists, and music content
- Cloud-based music file storage and streaming

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or Yarn
- MongoDB

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/spotify-clone.git
cd spotify-clone
```

### Set up the backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Set up the frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

### Set up the admin panel

1. Open another terminal and navigate to the admin directory:
   ```bash
   cd admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the admin panel development server:
   ```bash
   npm start
   ```

## Accessing the Application

- Frontend: Open your browser and visit `http://localhost:3000`
- Admin Panel: Visit `http://localhost:3001` (assuming you've set it to a different port)
- Backend API: The server will be running on `http://localhost:5000` by default

## Contributing

We welcome contributions to improve the Spotify Clone project. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Spotify for inspiration
- React and Tailwind CSS communities for excellent documentation
- Node.js and Express.js for powerful backend capabilities
- MongoDB for flexible data storage
- Cloudinary for efficient media file management

---

Happy coding! 🎵🚀
