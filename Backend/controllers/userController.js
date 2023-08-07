const User = require('../models/user');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create a user
exports.createUser = async (req, res) => {
  // const id = req.body.id;
  const expense_amount=req.body.expense_amount;
  const description=req.body.description;
  const category=req.body.category;

  try {
    const newUser = await User.create({expense_amount:expense_amount, description:description, category:category });
    res.json(newUser);
  } catch (error) {
    console.log("errooorr");
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
