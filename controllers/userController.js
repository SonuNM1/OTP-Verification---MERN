

const userController = {
    userLogin: async (req, res) => {
        res.status(200).send({
            "message": "OTP sent successfully"
        });
    },
    // You can define more controller functions here, if needed
};

export default userController;
