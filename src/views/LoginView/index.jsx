import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginForm from "../../modules/Authorization/components/LoginForm/index.jsx";
import styles from "./styles.css";

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
