import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
// import styles from "../styles/LoginForm.css";
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles";
import yellow from "@material-ui/core/colors/yellow"


const theme = createMuiTheme({ palette: { primary: yellow } })


const LoginForm = () => {
  const history = useHistory();

  const loginHandler = () => {
    history.replace("/mycalendar");
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                size="small"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Button
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
              onClick={loginHandler}
            >
              Log in
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
