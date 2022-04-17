import express from "express";

const testingRouter = express.Router();

testingRouter.get("/", async (req, res) => {
    try {
        const allUserBookings = {
            id: '1', username: 'olajide abdulrazzaq'
        }

        res.status(200).json(allUserBookings)
    } catch (error) {
        res.status(500).send(error);
    }
})

export {testingRouter}