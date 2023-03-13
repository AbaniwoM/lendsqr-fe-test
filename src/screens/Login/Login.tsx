import React from 'react';
import Logo from '../../components/Logo/Logo';
import TextField from '@mui/material/TextField';
import "./Login.scss";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
const LoginImg = require("../../components/Images/pablo_sign_in.png");

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="loginContainer">
        <div className="left">
          <div className="leftItems">
            <div className="loginLogo">
              <Logo />
            </div>
            <img src={LoginImg} alt="loginImg" className="loginImg" />
          </div>
        </div>
        <div className="right">
          <div className="right-grid">
          <div className="top-text">
          <h2>Welcome!</h2>
          <p>Enter details to login</p>
          </div>
          <div className="text-field">
          <TextField
            id="outlined-textarea"
            label="Email"
            sx={{ 
              width: { lg: '30vw' }
            }}
            multiline
          />
          <FormControl sx={{ width: { lg: '30vw' } }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          </div>
          <h4>FORGOT PASSWORD?</h4>
          <button className="loginBtn">LOG IN</button>
        </div>
        </div>
    </div>
  )
}

export default Login;