import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    const response = await axios.post("http://localhost:9000/admin/signup", {
      username: username,
      password: password,
    });
    let data = response.data;
    localStorage.setItem("token", data.token);
    window.location = "/";
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            border: "1px solid #ccc",
            borderRadius: "12px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <Avatar sx={{ m: "auto", bgcolor: "#FF033E" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSignup}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(evant11) => {
                    let elemt = evant11.target;
                    setUsername(elemt.value);
                  }}
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(evant11) => {
                    let elemt = evant11.target;
                    setPassword(elemt.value);
                  }}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
