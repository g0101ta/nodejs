const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api', (req, res) => {
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
                          <Response>
                              <Say>Please wait while we connect your call to the A. I. voice assistant, powered by Twilio and the Open-A.I. Realtime API</Say>
                              <Pause length="1"/>
                              <Say>O.K. you can start talking!</Say>
                          </Response>`;
  res.send(twimlResponse);
});

app.listen(PORT, () => {
  console.log(`Server running`);
});
