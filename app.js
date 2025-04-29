const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Server running`);
});
