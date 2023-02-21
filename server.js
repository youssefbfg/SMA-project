const express = require('express');
const connectDB = require('./config/connectDB');
const postRoutes = require('./routes/post');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/posts', postRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));