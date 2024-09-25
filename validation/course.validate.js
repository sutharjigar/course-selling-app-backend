const { z } = require("zod");

const courseValidators = {};

courseValidators.createCourse = {
    duration: z.number(),
    price: z.number(),
    title: z.string().max(200),
    description: z.string().max(200),
    imageUrl: z.string(),
    agentId: z.string()
}

courseValidators.updateCourse = {
    duration: z.number(),
    price: z.number(),
    title: z.string().max(200),
    description: z.string().max(200),
    imageUrl: z.string(),
    courseId: z.string()
}

courseValidators.deleteCourse = {
    courseId: z.number()
}

module.exports = { courseValidators }