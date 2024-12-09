# Bonsai Pets Website

Welcome to the **Bonsai Pets Website**! This is a full-stack MERN application designed for **PetShop** to showcase their unique offerings of Bonsai animals, provide engaging tutorials, and promote DIY kits. The site features a modern, responsive design with seamless navigation and a robust backend.

## Features

- **Information Hub**: Detailed descriptions and care instructions for various Bonsai animals.
- **Customer Testimonials**: Showcase feedback from satisfied Bonsai pet owners.
- **Gallery**: A visually stunning display of Bonsai pets available for sale.
- **DIY Kits**: Information and purchase options for DIY Bonsai pet kits.
- **Booking System**: Reserve slots for Bonsai pet tutorials in Karachi, Lahore, Islamabad, and Multan.

---

## Tech Stack

- **Frontend**: React.js
  - React Router for SPA navigation.
  - Styled Components for design.
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
  - Mongoose for data modeling.
- **Authentication**: JWT for secure user sessions.
- **State Management**: Redux Toolkit.
- **Deployment**: 
  - Frontend: Netlify/Vercel.
  - Backend: Heroku/Render.
- **Miscellaneous**:
  - Multer for handling image uploads in the gallery.
  - Nodemailer for email notifications for tutorial bookings.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/bonsai-pets.git
   cd bonsai-pets
   ```

2. **Backend Setup**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**
   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following:
     ```env
     REACT_APP_BACKEND_URL=http://localhost:5000
     ```
   - Start the development server:
     ```bash
     npm start
     ```

---

## Project Structure

```plaintext
bonsai-pets/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── redux/       # State management
│       └── App.js       # Main app entry point
├── server/              # Express backend
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── controllers/     # Request handlers
│   └── server.js        # Server entry point
└── README.md            # Project documentation
```

---

## Key Features Breakdown

### Information Hub
- Dynamic pages detailing Bonsai animals and their care.
- API-driven content for easy updates.

### Customer Testimonials
- Testimonial carousel on the homepage.
- CRUD functionality for admin to manage testimonials.

### Gallery
- Upload, display, and categorize images using Multer.
- Pagination for large galleries.

### DIY Kits
- Informational page with purchase options.
- Integration with a payment gateway (e.g., Stripe).

### Booking System
- Select city, date, and time slots for tutorials.
- Backend ensures slot availability and sends email confirmations.

---

## Feedback
Client feedback was implemented as follows:
1. **Ease of Use**: A clean, intuitive UI ensures users can quickly access relevant information.
2. **Customization**: Booking workshops and DIY kits offer flexibility and engagement.

---

## Deployment

- Frontend and backend are deployed separately.
- Ensure environment variables for production are set.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For further inquiries or support, please reach out!
```
 