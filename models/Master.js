const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MasterSchema = new Schema({
    acc_name: {
        type: String,
        // required: true
    },
    grp_name: {
        type: String,
        // required: true
    },
    op_balance: {
        type: String,
        // required: true
    },
    op_balance_type: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    pin_code: {
        type: String,
        // required: true
    },
    phone_no: {
        type: String,
        // required: true
    },
    gst_no: {
        type: String,
        // required: true
    },
    cst_no: {
        type: String,
        // required: true
    },
    pur_order_no: {
        type: String,
        // required: true
    },
    pur_order_date: {
        type: String,
        // required: true
    },
    supp_code: {
        type: String,
        // required: true
    },
    conn_ac: {
        type: String,
        // required: true
    }
})

module.exports = Master = mongoose.model('master', MasterSchema)