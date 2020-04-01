const mongoose = require('mongoose')

const Schema = mongoose.Schema


// changes needed
const AnkTaxSchema = new Schema({
    tax_inv_date: {
        type: String,
        required: true
    },
    memo_no: {
        type: String,
        required: true
    },
    memo_date: {
        type: Number,
        required: true
    },
    customer_name: {
        type: Number,
        required: true
    },
    TIN_gst: {
        type: String,
        required: true
    },
    cst: {
        type: String,
        required: true
    },
    order_no: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    lr_no: {
        type: String,
        required: true
    },
    fgt_details: {
        type: String,
        required: true
    },
    transporter: {
        type: Date,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    total: {
        type: Boolean,
        required = true
    },
    dis_perc: {
        type: Boolean,
        required = true
    },
    dis_amt: {
        type: Boolean,
        required = true
    },
    packing: {
        type: Boolean,
        required = true
    },
    transportation: {
        type: Boolean,
        required = true
    }
})

module.exports = AnkTax = mongoose.model('master', AnkTaxSchema)