const calQuantity = require('../middleware/calculateQuantity');

// grabs current ethereum price from bianace
exports.calEthQunt = async (req, res, next) => {
    // console.log(req.body)
    try {
        const cedQuantity = req.body.cedsquantity;

        await calQuantity(req, res, () => {
            //console.log(req.body);
            const ethQuantity = req.body.ethQuantity;
            return res.json({
                success : true,
                ethQuantity : ethQuantity,
                message : `Here is how many Ethereum that you have to buy to buy ${cedQuantity} cedars coin`
            });
        });
        
    } catch (error) {
        console.log("huh")
    }
}