const express = require('express');
const app = express();

app.get("/api/timestamp/:date_string?", (req, res) => {
  // Your logic here
});

app.get("/api/timestamp/:date_string?", (req, res) => {
    let dateString = req.params.date_string;
    let date;
  
    if (!dateString) {
      date = new Date();
    } else if (/^\d+$/.test(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  
    if (isNaN(date.getTime())) {
      return res.json({ error: "Invalid Date" });
    }
  
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  });
  