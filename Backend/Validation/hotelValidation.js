const {body} = require("express-validator");

module.exports = [
    body('name').not().isEmpty().escape().withMessage('Hotel Name Required'),
    body('type').not().isEmpty().escape().withMessage('Hotel type Required'),
    body('city').not().isEmpty().escape().withMessage('City Name Required'),
    body('address').not().isEmpty().escape().withMessage('Hotel Address Required'),
    body('distance').not().isEmpty().escape().withMessage('Hotel Distance Required'),
    body('title').not().isEmpty().escape().withMessage('hotel Title Required'),
    body('desc').not().isEmpty().escape().withMessage('Discription Required'),
    body('cheapestprice').not().isEmpty().escape().withMessage('Price Required'),

   

];

