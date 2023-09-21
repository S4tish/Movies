const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Succesfully Connected to the database");
})
.catch((error) => {
  console.log(`Error in connecting to the database ${error}`);
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
    const { name, password } = req.body;
    const user = new User({ name, password });
    await user.save();
    res.json({ message: 'User registered successfully' });
  });

// Login route
app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    res.json({ message: 'User logged in successfully' });
  });
  
// Get user data route

  
// Rest of the code...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
