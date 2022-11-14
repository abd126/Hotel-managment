
const bcrypt = require("bcryptjs");



module.exports.hashPassword = async(password) =>{
    const hashed = await bcrypt.hash(password, 10)
    return hashed;
};

module.exports.comparePassword = async(password , dbpassword) => {
    return await bcrypt.compare(password , dbpassword)
};