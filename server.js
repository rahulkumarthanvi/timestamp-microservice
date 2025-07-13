const express = require('express');
const app = express();

// Enable CORS for FreeCodeCamp testing
const cors = require('cors');
app.use(cors());

app.get("/api/timestamp/:date_string?", (req, res) => {
  let { date_string } = req.params;
  let date;

  if (!date_string) {
    date = new Date();
  } else {
    // Check if it's a UNIX timestamp (all digits)
    if (/^\d+$/.test(date_string)) {
      date = new Date(parseInt(date_string));
    } else {
      date = new Date(date_string);
    }
  }

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
