import React, { Component } from 'react'
import axios from 'axios';


class AccountMaster extends Component {



    state = {
        acc_name: "1",
        grp_name: "1",
        op_balance: "1",
        op_balance_type: "Credit",
        op_balance_type_options: [
            { label: "Credit", value: "Credit", checked: true },
            { label: "Debit", value: "Debit", checked: false }
        ],
        address: "1",
        city: "1",
        pin_code: "1",
        phone_no: "1",
        fax_no: "1",
        gst_no: "1",
        cst_no: "1",
        pur_order_no: "1",
        pur_order_date: new Date(),
        supp_code: "1",
        conn_ac: false,
        displaySuccess: false,
        displayError: false,
        error: ''
    }

    onSubmit = e => {
        e.preventDefault()
        const userData = {
            acc_name: this.state.acc_name,
            grp_name: this.state.grp_name,
            op_balance: this.state.op_balance,
            op_balance_type: this.state.op_balance_type,
            address: this.state.address,
            city: this.state.city,
            pin_code: this.state.pin_code,
            phone_no: this.state.phone_no,
            fax_no: this.state.fax_no,
            gst_no: this.state.gst_no,
            cst_no: this.state.cst_no,
            pur_order_no: this.state.pur_order_no,
            pur_order_date: this.state.pur_order_date,
            supp_code: this.state.supp_code,
            conn_ac: this.state.conn_ac
        }

        axios.post('./api/bill/master', userData)
            .then(res => this.setState({ displaySuccess: true }))
            .catch(err => this.setState({
                displayError: true,
                error: err.toString()
            }))

    }

    onChange = e => {
        if ([e.target.name] == 'op_balance_type') {
            const name = e.target.name
            const value = e.target.value
            this.setState(prevState => {
                return {
                    ...prevState,
                    [name]: value,
                    op_balance_type_options: prevState.op_balance_type_options.map(eachElement => {
                        eachElement.checked = false
                        if (eachElement.name == name)
                            eachElement.checked = true
                        return eachElement
                    })
                }
            })
        } else if ([e.target.name] == 'conn_ac') {
            this.setState(prevState => {
                return {
                    ...prevState,
                    conn_ac: !prevState.conn_ac
                }
            })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }

    render() {
        return (
            <div>
                {this.state.displaySuccess == true ? <h5>Successfully sent</h5> : <h5></h5>}
                {this.state.displayError == true ? <h5>Unsuccessful Pls Try again, Error: {this.state.error}</h5> : <h5></h5>}
                <form onSubmit={e => this.onSubmit(e)}>
                    <table>
                        <tr>
                            <td><label>Account Name</label></td>
                            <td><input type="text" name="acc_name" value={this.state.acc_name} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Group Name</label></td>
                            <td><input type="text" name="grp_name" value={this.state.grp_name} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Op. Balance</label></td>
                            <td><input type="text" name="op_balance" value={this.state.op_balance} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Op. Balance Type</label></td>
                            <td> {this.state.op_balance_type_options.map(each => {
                                return (
                                    <span key={each.value}>
                                        <input type="radio" name="op_balance_type" value={each.value} onChange={e => this.onChange(e)} checked={each.checked} /> <label>{each.label}</label>
                                    </span>
                                )
                            })} </td>

                        </tr>
                        <tr>
                            <td><label>Address</label></td>
                            <td><input type="text" name="address" value={this.state.address} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>City</label></td>
                            <td><input type="text" name="city" value={this.state.city} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>PIN Code</label></td>
                            <td><input type="text" name="pin_code" value={this.state.pin_code} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Phone Number</label></td>
                            <td><input type="text" name="phone_no" value={this.state.phone_no} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Fax Number</label></td>
                            <td><input type="text" name="fax_no" value={this.state.fax_no} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>GST Number</label></td>
                            <td><input type="text" name="gst_no" value={this.state.gst_no} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>CST Number</label></td>
                            <td><input type="text" name="cst_no" value={this.state.cst_no} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Purchase Order Number</label></td>
                            <td><input type="text" name="pur_order_no" value={this.state.pur_order_no} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Purchase Order Date</label></td>
                            <td><input type="date" name="pur_order_date" value={this.state.pur_order_date} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Supplier Code</label></td>
                            <td><input type="text" name="supp_code" value={this.state.supp_code} onChange={e => this.onChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><label>Conn. A/C</label></td>
                            <td><input type="checkbox" name="conn_ac" value={this.state.conn_ac} onChange={e => this.onChange(e)} checked={this.state.conn_ac} /></td>
                        </tr>
                    </table>
                    <input type="submit" onClick={e => this.onSubmit(e)} />
                </form>
            </div>
        )
    }
}

export default AccountMaster