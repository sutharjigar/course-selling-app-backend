const { z } = require('zod');

const courseValidators = {};

courseValidators.createCourse = z.object({
  duration: z.number(),
  price: z.number(),
  title: z.string().max(200),
  description: z.string().max(200),
  imageUrl: z.string(),
  adminId: z.string(),
});

courseValidators.updateCourse = z.object({
  duration: z.number(),
  price: z.number(),
  title: z.string().max(200),
  description: z.string().max(200),
  imageUrl: z.string(),
  courseId: z.string(),
});

courseValidators.deleteCourse = z.object({
  courseId: z.number(),
});

module.exports = { courseValidators };
