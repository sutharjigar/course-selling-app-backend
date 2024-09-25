const { z } = require('zod');
const adminValidators = {};

adminValidators.signUp = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  password: z.string().min(6),
});

adminValidators.signIn = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = { adminValidators };
