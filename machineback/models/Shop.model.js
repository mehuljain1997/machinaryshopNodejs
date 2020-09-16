const mongoose = require('mongoose');

const ShopSchema = mongoose.Schema({
    ShopId: Number,
    ShopType: String,
    ShopName: String,
    OwnerName: String,
    ShopAddress: String,
    OwnerContactNo: Number
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Shop', ShopSchema);