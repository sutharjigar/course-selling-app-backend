const { z } = require('zod');
const userValidators = {};

userValidators.createUser = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  password: z.string().min(6),
});

userValidators.signIn = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = { userValidators };
