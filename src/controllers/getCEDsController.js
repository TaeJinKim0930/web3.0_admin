const database = require('../db/connection');
const errors = require('../utils/errors');


exports.getCEDS = (req, res, next) => {
    try {
        const address = req.body.acc_address;
        const sql = `select quantity from master where acc_address = ?`;
        database.query(sql, address, (err, result) => {
            if (err) {
                const error = errors.find((err) => err.code === 1001);
                return res.status(500).send(error);
            } else {
                // console.log(result);
                // console.log(result[0]?.quantity);
                const quantity = result[0]?.quantity;
                return res.json({
                    success : true,
                    quantity : quantity,
                    message : `Here is how many Cedars Coins you have`
                });
            }
        });
    } catch (error) {
        const error2 = errors.find((err) => err.code === 1002);
        return res.status(500).send(error2);
    }
};