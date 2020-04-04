import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


class Navbar extends Component {

    // state = {
    //     accountMasterStyle: "nav-link",
    //     accountMasterDashboardStyle: "nav-link"
    // }

    // componentDidMount() {
    //     console.log(this.props.location.pathname)
    //     if (this.props.location.pathname == "/accountMaster") {
    //         this.setState({
    //             accountMasterStyle: "nav-link active",
    //             accountMasterDashboardStyle: "nav-link"
    //         })
    //     } else if (this.props.location.pathname == "/accountMasterDashboard") {
    //         this.setState({
    //             accountMasterStyle: "nav-link",
    //             accountMasterDashboardStyle: "nav-link active"
    //         })
    //     }
    // }

    render() {

        var accountMasterStyle = "nav-link"
        var accountMasterDashboardStyle = "nav-link"
        if (this.props.location.pathname == "/accountMaster") {
            accountMasterStyle = "nav-link active"
        } else if (this.props.location.pathname == "/accountMasterDashboard") {
            accountMasterDashboardStyle = "nav-link active"
        }
        return (
            <div className="Navbar">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className={accountMasterStyle} to="/accountMaster">
                            Account Master
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={accountMasterDashboardStyle} to="/accountMasterDashboard">
                            Account Master Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar)