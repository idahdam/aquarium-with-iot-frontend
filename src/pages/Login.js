
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid>
          <form>
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
              onChange={(e) => setEmail(e.target.value)}
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
      </Grid>
    </>
  )
}

export default Login