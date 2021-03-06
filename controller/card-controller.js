const CardModel = require('../model/card-model');

module.exports.addCard = function (req, res) {
    let user = req.body.user;
    let vendorProduct = req.body.vendorProduct;
    let qty = req.body.qty;

    let Card = new CardModel({
        user: user,
        vendorProduct: vendorProduct,
        qty: qty
    })

    Card.save(function (err, data) {
        if (err) {
            res.json({ msg: "Card Not Add", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Card Add", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteCard = function (req, res) {
    let cardId = req.params.cardId

    CardModel.deleteOne({ _id: cardId }, function (err, data) {
        if (err) {
            res.json({ msg: "Delete went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete done", data: data, status: 200 })//http status code 
        }
    })
}