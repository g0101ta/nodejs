const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('index accessed');
  const wssUrl = `ws://${req.headers.host}/media-stream`;
  console.log(wssUrl);
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
                          <Response>
                              <Say>これはテストです。</Say>
                              <Pause length="1"/>
                              <Say>you can start talking!</Say>
                              <Connect>
                                  <Stream url="${wssUrl}" />
                              </Connect>
                          </Response>`;
  res.status(200).type('text/xml').send(twimlResponse);
});

module.exports = router;
