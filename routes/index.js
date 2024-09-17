const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
  // Example data for dynamic content
  const seats = [
    { id: 1, status: 'available' },
    { id: 2, status: 'reserved' },
    { id: 3, status: 'available' },
    // Add more seats as needed
  ];

  // Render the 'index.ejs' template and pass the seat data
  res.render('index', { title: 'Home Page', seats });
});

// Route for seat selection page
router.get('/seats', (req, res) => {
  // Example data for seats (could be fetched from a database)
  const seats = [
    { id: 1, status: 'available' },
    { id: 2, status: 'reserved' },
    { id: 3, status: 'available' },
    // Add more seats as needed
  ];

  // Render the 'seats.ejs' template and pass the seat data
  res.render('seats', { seats });
});

// Export the router
module.exports = router;
