const validate = (schema) => (req, res, next) => {
    try {
        const combinedData = {
            ...req.body,
            ...req.params,
            ...req.query,
        };
        schema.parse(combinedData);

        next();
    } catch (error) {
        return res.status(400).json({ msg: "wrong data", error: error.errors });
    }
};

module.exports = { validate }