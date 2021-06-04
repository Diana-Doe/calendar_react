import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import FormGroup from "@material-ui/core/FormGroup";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import React from "react";

import * as obj from "../../../../data/users.json";
import "./styles.css";
import { usersActions } from "../../../../store/actions";
import { usersSelectors } from "../../../../store/selectors";





const LoginForm = () => {
  const items = useSelector(usersSelectors.getUser);
  const { control, handleSubmit, getValues, errors } = useForm();
  const dispatch = useDispatch();
  let history = useHistory();

  let chooseButton = 0;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  const LoginButton = (values) => {
  
    dispatch(usersActions.loginUser(values.password, values.email));
    // items = useSelector(usersSelectors.getUser);
    console.log("items 1:", items);
    if (items !== null) {
      history.replace("/mycalendar/" + items);
    } 
    else {
      console.log("ERROR: there is no such user!! >:(");
    }
}

  const RegisterButton = (values) => {
            dispatch(usersActions.checkEmail(values.email));
        // items = useSelector(usersSelectors.getUser);
        console.log("items:", items);

  }

  const onSubmit = () => {
    if (!errors) {
      const values = getValues();
      if (chooseButton === 1){
        // dispatch(usersActions.loginUser(values.password, values.email));
        // items = useSelector(usersSelectors.getUser);
        // console.log("items:", items);
        // if (items !== null) {
        //   history.replace("/mycalendar/" + items);
        // } 
        // else {
        //   console.log("ERROR: there is no such user!! >:(");
        // }
        LoginButton(values);
        console.log("items in ", items)
        if (items === null) {
          if (validateEmail(values.email)) {
            const id = uuidv4();
             dispatch(
                usersActions.registerUser({
                    id: id,
                    email: values.email,
                    password: values.password
                })
            );
            history.replace("/mycalendar/" + id);
          }
          else {
            console.log("ERROR: email is invalid");
          }
        } 
        else {
          console.log("ERROR: there is such email!! >:(");
        }
      } 
      else {
        // dispatch(usersActions.checkEmail(values.email));
        // items = useSelector(usersSelectors.getUser);
        // console.log("items:", items);
        // if (items === null) {
        //   if (validateEmail(values.email)) {
        //     const id = uuidv4();
        //      dispatch(
        //         usersActions.registerUser({
        //             id: id,
        //             email: values.email,
        //             password: values.password
        //         })
        //     );
        //     history.replace("/mycalendar/" + id);
        //   }
        //   else {
        //     console.log("ERROR: email is invalid");
        //   }
        // } 
        // else {
        //   console.log("ERROR: there is such email!! >:(");
        // }
        RegisterButton(values);
      }
    }
  }

 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <FormGroup>
              <Controller
                name="email"
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <TextField
                        label="Email"
                        margin="dense"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: "Email required" }}
             />
          </FormGroup>
          <FormGroup>
              <Controller
                name="password"
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <TextField
                        label="Password"
                        margin="dense"
                        type="password"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: "Password required" }}
             />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <button
            className = "LoginForm__button"
            type="submit"
            onClick={() => (chooseButton = 1)}
            variant="contained"
          >
            Log in
          </button>
          
          <button
            className = "LoginForm__button"
            type="submit"
            onClick={() => (chooseButton = 2)}
            variant="contained"
          >
            Register
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;