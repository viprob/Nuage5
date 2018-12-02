"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    products: [String]
}, {
    versionKey: false
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://log4420TP4:log4420TP4A18@ds119800.mlab.com:19800/online-shop", {
    useMongoClient: true
});

module.exports = {
    Invoice
};