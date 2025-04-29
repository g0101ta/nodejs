const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api', require('./routes/index'));
app.use('/media-stream', require('./routes/media-stream'));

app.listen(PORT, () => {
  console.log(`Server running`);
});
