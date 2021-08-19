import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutingComponent from './Router';
import { AuthProvider} from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/dashboard/Dashboard';

ReactDOM.render(
  <AuthProvider>
    <RoutingComponent />
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
