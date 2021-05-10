import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginForm from "./LoginForm.js";
import styles from "../styles/LoginView.css";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const LoginView = () => {
  const classes = useStyles(styles);

  return (
    <Container className={classes.container} maxWidth="xs">
      <LoginForm />
    </Container>
  );
};

export default LoginView;
