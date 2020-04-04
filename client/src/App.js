import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AccountMaster from './Forms/AccountMaster'
import AccountMasterDashboard from './Dashboards/AccountMasterDashboard'
import Navbar from './Layout/Navbar'
function App() {
  return (
    <div className="App">

      <Router >
        <Navbar />
        <Route exact path="/" component={AccountMaster} />
        <Route exact path="/accountMaster" component={AccountMaster} />
        <Route exact path="/accountMasterDashboard" component={AccountMasterDashboard} />
      </Router>
      {/* <AccountMaster />
      <AccountMasterDashboard /> */}
    </div>
  );
}

export default App;
