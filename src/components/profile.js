import React from 'react'
import { Button, Stack, Typography, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        sx={{
          height: "100%",
          pl: 3,
          pr: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{
            mb: 5
          }}
        >
          Profile
        </Typography>
        <Typography
          fontWeight={600}
        >
          Username
        </Typography>
        <Typography>
          {user.username}
        </Typography>
        <Typography
          fontWeight={600}
        >
          Email
        </Typography>
        <Typography>
          {user.email}
        </Typography>
        <Button
          variant="outlined"
          color="darkBlue"
          size="small"
          sx={{
            mt: 5,
          }}
          onClick={() => {
            navigator.clipboard.writeText(user.deviceToken).then(() => {
              handleClick()
            })
          }}
        >
          Copy Device Token
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Copied to clipboard"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{
            mt: 1,
          }}
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.reload()
          }}
        >
          Logout
        </Button>
      </Stack>
    </>
  )
}
export default Profile