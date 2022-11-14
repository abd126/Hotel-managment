const {body} = require("express-validator");

module.exports = [
    
    body('maxPeople').not().isEmpty().escape().withMessage('Number Of Person Required'),
    body('title').not().isEmpty().escape().withMessage('hotel Title Required'),
    body('desc').not().isEmpty().escape().withMessage('Discription Required'),
    body('price').not().isEmpty().escape().withMessage('Price Required'),

   

];

