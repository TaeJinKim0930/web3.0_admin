const axios = require('axios');

// grabs current ethereum price from bianace
exports.getEthPrice = async (req, res, next) => {
    try {
        const ethResponse = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
        const ethPrice = ethResponse.data.price;
        
        // res.json({
        //     success : true,
        //     ethereum_price : ethPrice,
        //     message : 'Here is Ethereum Price'
        // });

        if(ethPrice) {
            return ethPrice;
        } else {
            throw new Error('Failed to fetch ETH price. Price does not exist');
        }
    } catch (error) {
        res.status(500).json({
            code : 1006,
            error : true,
            message : 'Failed to fetch ETH price'
        });
    }
};
