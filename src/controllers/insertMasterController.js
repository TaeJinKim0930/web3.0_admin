const database = require('../db/connection');

// grabs current ethereum price from bianace
exports.insertCoinMaster = async (req, res, next) => {
    // console.log(req.body)
    try {
        const address = req.body.acc_address;
        const quantity = req.body.quantity;
        const balance = req.body.balance;
        const unitPrice = req.body.unitPrice;
        // console.log(address);
        // console.log(quantity);
        // console.log(balance);
        // console.log(unitPrice);

        // metamask address, how many purchased, how much, what price
        const sql = `Insert into master (acc_address, quantity, balance, unitPrice) VALUES (?,?,?,?)`;
        const values = [address, quantity, balance, unitPrice];
        database.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).json({
                    code : 1009,
                    message : 'Failed to insert DB'
                });
            } else {
                return res.status(201).json({
                    ok : true,
                    acc_address : address,
                    quantity : quantity,
                    balance : balance,
                    unitPrice : unitPrice,
                    message : "Successfully inserted purchased coin"
                })
            }
        });
    } catch (error) {
        res.status(500).json({
            code : 1006,
            error : true,
            message : 'Failed to insert data into master DB'
        });
    }
}