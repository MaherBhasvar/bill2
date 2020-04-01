
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Master = require("../models/Master")

// POST api/bill/master
// create master entries
// Public
router.post('/master', (req, res) => {
    const newMaster = new Master({
        acc_name: req.body.acc_name,
        grp_name: req.body.grp_name,
        op_balance: req.body.op_balance,
        op_balance_type: req.body.op_balance_type,
        address: req.body.address,
        city: req.body.city,
        pin_code: req.body.pin_code,
        phone_no: req.body.phone_no,
        gst_no: req.body.gst_no,
        cst_no: req.body.cst_no,
        pur_order_no: req.body.pur_order_no,
        pur_order_date: req.body.pur_order_date,
        supp_code: req.body.supp_code,
        conn_ac: req.body.conn_ac
    })

    newMaster.save().then(doc => {
        console.log("Master updated", doc)
        res.send(doc)
    }, e => {
        console.log("Error", e)
        res.status(400).send(e)
    })
})

module.exports = router