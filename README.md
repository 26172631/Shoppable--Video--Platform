# Shoppable Video Platform Application with Clickable Hotspots

This project implements a basic video streaming feature using HLS (HTTP Live Streaming) with clickable hotspots. When a hotspot is clicked, a modal displays product details with a "Buy Now" button. The application is designed to be responsive, ensuring a good user experience across different screen sizes.

## Tech Stack
- **Frontend:** HTML, CSS, BootStrap5, JavaScript, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Features
1. **Video Streaming:** Supports HLS streaming.
2. **Clickable Hotspots:** Hotspots appear at specific timestamps on the video, displaying product information when clicked.
3. **Product Information Modal:** Displays product details (name, description, price, image) and a "Buy Now" button.
4. **Responsive Design:** Works well on different screen sizes.

## Project Setup

### Prerequisites
- Node JS installed
- MongoDB installed
- Express JS installed

### Steps to Run the Project Locally

1. **Install Dependencies:**
    ```bash
    npm install
    cd frontend and backend
    npm install
    ```

2. **Start the Backend Server:**
    ```bash
    nodemon index.js
    ```

3. **Start the Frontend:**
    ```bash
    cd frontend
    npm start
    ```

## Usage

The frontend should now be running on `http://localhost:3000`.
The backend should now be running on `http://localhost:4000`.

## API Endpoints

### Product

- **GET /product/getAllProduct**: Get all products.
- **POST /product/createproduct**: Add a new product.
- **POST /product/products/:id**: Get a product by Id.

### Video

- **GET /video/metadata**: Get all video metadata.
- **POST /video/createvideo**: Add a new video metadata.

### Lectures

- **GET /lecture/instructorLecture/:instructorId**: Get all lectures for a specific instructor.
- **POST /lecture/assigncourse**: Add Lecture to a specific instructor.
- **GET /lecture/getAlllecture**: Get all lectures for a all instructor in admin side.


## Project Structure

```markdown
.
├── frontend
│   ├── public
│   └── src
│       ├── components
│       │   ├── Header.js
│       │   ├── ProductModel.js
│       │   ├── VideoPlayer.js
│       ├── App.js
│       ├── index.js
│       └── ...
├── backend
│   ├── controller
│   │   ├── product.js
│   │   ├── video.js
│   │   
│   ├── model
│   │   ├── Product.js
│   │   ├── Video.js
│   │   
│   ├── routes
│   │   ├── product.js
│   │   ├── video.js
│   │   
│   ├── index.js
│   └── ...
├── .gitignore
├── README.md
└── ...

