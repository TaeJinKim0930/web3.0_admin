const axios = require('axios');

// grabs current cedars price from coin ranking
exports.getCedsPrice = async (req, res, next) => {
    try {
        const cedsResponse = await axios.get('https://api.coinranking.com/v2/coins?search=cedars');
        // console.log(cedsResponse.data.data.coins[0].price);

        const cedsPrice = cedsResponse.data.data.coins[0].price;
        // console.log(cedsPrice);
        
        // res.json({
        //     success : true,
        //     cedars_price : cedsPrice,
        //     message : 'Here is Cedars Price'
        // }); 

        if(cedsPrice) {
            return cedsPrice;
        } else {
            throw new Error('Failed to fetch CEDS price. Price does not exist');
        }
    } catch (error) {
        res.status(500).json({
            code : 1006,
            error : true,
            message : 'Failed to fetch CEDS price'
        });
    }
};

