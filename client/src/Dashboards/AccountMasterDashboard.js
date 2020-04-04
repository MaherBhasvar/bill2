import React, { Component } from 'react'
import axios from 'axios'

class AccountMasterDashboard extends Component {

    state = {
        data: '',
        displayError: false,
        error: ''
    }

    componentDidMount() {
        axios.get('./api/bill/masterDashboard')
            .then(res => this.setState({ data: res.data }))
            .catch(err => this.setState({
                displayError: true,
                error: err
            }))
    }

    render() {

        console.log(this.state.data)
        var data = this.state.data
        var display = <div></div>
        if (data == '') {
            display = (<div><h5>Data Not Fetched/ Data Not Available</h5></div>)
        } else {
            display = (<div>
                <table className="table">
                    <tr>
                        <th>Account Name</th>
                        <th>Group Name</th>
                        <th>Op. Balance</th>
                        <th>Op. Balance Type</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>PIN Code</th>
                        <th>Phone No</th>
                        <th>Fax No</th>
                        <th>GST No</th>
                        <th>CST No</th>
                        <th>Purchase Order No</th>
                        <th>Purchase Order Date</th>
                        <th>Supplier Code</th>
                        <th>Conn. A/c</th>
                    </tr>
                    {data.map(eachRow => {
                        return (
                            <tr key={eachRow._id}>
                                <td>{eachRow.acc_name}</td>
                                <td>{eachRow.grp_name} </td>
                                <td>{eachRow.op_balance}</td>
                                <td>{eachRow.op_balance_type} </td>
                                <td>{eachRow.address}</td>
                                <td>{eachRow.city} </td>
                                <td>{eachRow.pin_code}</td>
                                <td>{eachRow.phone_no} </td>
                                <td>{eachRow.fax_no} </td>
                                <td>{eachRow.gst_no}</td>
                                <td>{eachRow.cst_no} </td>
                                <td>{eachRow.pur_order_no}</td>
                                <td>{eachRow.pur_order_date}</td>
                                <td>{eachRow.supp_code} </td>
                                <td>{eachRow.conn_ac} </td>
                            </tr>
                        )
                    })}
                </table>
            </div>)
        }

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default AccountMasterDashboard