const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    registerUser: async (parent, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      return user;
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      if (user.attempts >= 5 && Date.now() - user.lastLoginAttempt < 5 * 60 * 1000) {
        throw new Error('Account locked. Try again later.');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        user.attempts += 1;
        user.lastLoginAttempt = Date.now();
        await user.save();

        if (user.attempts >= 5) {
          throw new Error('Account locked. Try again later.');
        }

        throw new Error('Invalid password');
      }

      user.attempts = 0;
      await user.save();

      const token = jwt.sign({ userId: user.id }, 'top-secret-authentication-key', { expiresIn: '1h' });
      return token;
    },
  },
};

module.exports = resolvers;
