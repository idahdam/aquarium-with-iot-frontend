
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { userService } from "../services/user.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    const user = {
      identifier,
      password,
    };

    try {
      const response = await userService.login(user);
      localStorage.setItem("token", response.jwt);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } catch (error) {
      alert(error.response.data.error.details.errors?.map((e) => e.message)
        ?.join(", ")
        || error.response.data.error.message);
    }

  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        textAlign="center"
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            fontWeight={600}
            gutterBottom
            sx={{
              mb: 15,
            }}
          >
            Aquarium With IOT
          </Typography>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Email
          </Typography>
          <TextField
            variant="outlined"
            color="darkBlue"
            size="small"
            fullWidth
            focused
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Password
          </Typography>
          <TextField
            variant="outlined"
            color="darkBlue"
            size="small"
            type={showPass ? "text" : "password"}
            fullWidth
            focused
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="darkBlue"
            type="submit"
            sx={{
              mt: 5,
            }}
            style={{ borderRadius: 10 }}
            fullWidth

          >
            <Typography variant="h6">Login</Typography>
          </Button>
        </form>
      </Grid>
    </>
  )
}

export default Login