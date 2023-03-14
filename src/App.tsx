import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import LoginPage from "./screens/Login/Login";
import Dashboard from './screens/Dashboard/Dashboard';
import User from './screens/User/User';
import UserDetails from './screens/UserDetails/UserDetails';

const App = () => {

  return (
    <div className="App">
      <Router>
        <RouterCover>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/user-details" element={<UserDetails />} />
        </RouterCover>
      </Router>
    </div>
  );
}

export default App;