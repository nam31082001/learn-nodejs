
module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map(item => item.toObject())
    },
    mongooseToObject: function (mongooseOjb) {
        return mongooseOjb ? mongooseOjb.toObject() : mongooseOjb
    }

}