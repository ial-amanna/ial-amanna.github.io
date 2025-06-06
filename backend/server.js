const express = require('express');
const cors = require('cors');
const geoip = require('geoip-lite');
const app = express();

// Enable CORS
app.use(cors());

// In-memory storage for visitor counts
let visitorCounts = {};

// Middleware to track visitors
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);
  
  if (geo && geo.country) {
    const country = geo.country;
    visitorCounts[country] = (visitorCounts[country] || 0) + 1;
  }
  
  next();
});

// API endpoint to get visitor counts
app.get('/api/visitors', (req, res) => {
  const visitorData = Object.entries(visitorCounts).map(([country, count]) => ({
    country,
    count
  }));
  
  // Sort by count in descending order
  visitorData.sort((a, b) => b.count - a.count);
  
  res.json(visitorData);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 