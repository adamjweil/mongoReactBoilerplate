import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, register } from "../../actions/auth";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
} from "@material-ui/core";

const Login = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <Fragment>
      <form onSubmit={register} noValidate>
        <TextField
          name="email"
          id="email"
          value={email}
          label="Email Address"
          variant='outlined'
          margin="normal"
          onChange={e => onChange(e)}
        />
        <TextField
          name="password"
          id="password"
          value={password}
          label="Email Address"
          variant='outlined'
          margin="normal"
          onChange={e => onChange(e)}
        />
        <Button
          fullWidth
          type="submit"
          size="small"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Login
        </Button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { register, login }
)(Login);
