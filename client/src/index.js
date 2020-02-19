import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createBrowserHistory } from "history";
import store from "./store";
import history from "./history";

ReactDOM.render(<App />, document.getElementById('root'));
