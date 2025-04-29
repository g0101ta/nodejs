const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const wssUrl = `ws://${req.headers.host}/media-stream`;
  console.log(wssUrl);
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
                          <Response>
                              <Say>これはテストです。Please wait while we connect your call to the A. I. voice assistant, powered by Twilio and the Open-A.I. Realtime API</Say>
                              <Pause length="1"/>
                              <Say>you can start talking!</Say>
                              <Connect>
                                  <Stream url="${wssUrl}" />
                              </Connect>
                          </Response>`;
  res.status(200).type('text/xml').send(twimlResponse);
});

module.exports = router;
