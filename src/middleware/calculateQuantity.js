const ethController = require('../controllers/ethControllers');
const cedsController = require('../controllers/cedsController');

const calQuantity = async (req, res, next) => {
    try {
        // console.log(req.body)
        const cedsQuantity = req.body.cedsquantity;
        // console.log(cedsQuantity); // 100
        const cedsPrice = await cedsController.getCedsPrice();
        const ethPrice = await ethController.getEthPrice();
        // console.log(cedsPrice + " dd");
        // console.log(ethPrice + " zz");
        const ethQuantity = (cedsQuantity * cedsPrice) / ethPrice;
        req.body.ethQuantity = ethQuantity;
        next();
    } catch (error) {
        res.status(400).json({
            code : 1007,
            error : true,
            message : 'Failed to calculate Quantity of ETH to buy given CEDS'
        });
    }
};

module.exports = calQuantity;


119.92