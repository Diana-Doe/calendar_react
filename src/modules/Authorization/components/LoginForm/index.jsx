import { useHistory } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles"
import yellow from "@material-ui/core/colors/yellow"

import React from "react";

import * as obj from '../../../../data/users.json';

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const theme = createMuiTheme({ palette: { primary: yellow } })

function LoginButton(props) {
  console.log("login props id ",props.id)
  let history = useHistory();

  function loginHandler(props) {
      const id = props.id
      const error = props.errors.password
      console.log(error)
      if (id !== '-1' && error === ''){
      history.replace("/mycalendar/"+id);
      }
    };
  
  return (
    <button type="button" onClick={() => {loginHandler(props)}}>Log in</button>
  );
}



function RegisterButton(props) {
  let history = useHistory();

  function registerHandler(props) {
      const id = String.prototype.hashCode(props.email);
      obj.default.push({ "id": id,
        "email": props.email,
        "password":props.password,
        "name": "Big",
        "surname": "Anya"})
      console.log(obj)
      history.replace("/mycalendar/"+id);

    };
  
  return (
    <button type="button" onClick={() => {registerHandler(props)}}>Register</button>
  );
}


export default class LoginForm extends React.Component{
  constructor(){
    super();
      
    this.userid = "-1";
    this.userpass = "-1"
    
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      email:"",
      id:"-1",
      password:"-1",
      errors:{
        email:"",
        id:"",
        password:""
      }
    };
} 

setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

handleChange(ev) {
  this.setState({
    [ev.target.name]: ev.target.value
  });
}

  validate(ev) {
    const { name, value} = ev.target;
    switch (name){
      
      case "email":{
        console.log("!!!!", value)
        let isFound = false;
        for (let m in obj.default){
          if (obj.default[m].email === value){
            isFound = true;
            this.setState({email: value});
            this.userpass = obj.default[m].password;
            console.log(this.userpass);
            this.userid = obj.default[m].id;
          } 
        }
        if (!isFound){
          this.setState({errors: {...this.state.errors, email:"Incorrect e-mail"}});
        }
        else {
          this.setState({errors: {...this.state.errors, email:""}});
        }
      } break;
      case "password": {
        console.log("&&&&", this.state);
        if(this.state.errors.email === "") {

          if(!(value === this.userpass)) {
           this.setState({errors: {...this.state.errors, password:"Incorrect password"}})
           this.setState({id: "-1"})
           this.setState({password: "-1"})
          }
          else {
            console.log("!")
            this.setState({errors: {...this.state.errors, password:""}})
            
            this.setState({id: this.userid})
            
            this.setState({password: this.userpass});
          }
        }
      } break;
    }
  }

onSubmit(event){
  event.preventDefault();
  const {errors } = this.state;
  if (errors.email || errors.password){
    console.log("invalid form")
  }
  console.log("submit", this.state, event)
}

render(){
  return (
    <form onSubmit={event => this.onSubmit(event)}>
      <div>
        <label htmlFor="email">email: </label>
        <input name="email" value={this.state.name} onChange={e => this.handleChange(e)} onBlur={e => this.validate(e)}/>
        {this.state.errors?.email && <span>{this.state.errors?.email}</span>}
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input name="password" type="password" value={this.state.name} onChange={e => this.handleChange(e)} onBlur={e => this.validate(e)}/>
        {this.state.errors?.password && <span>{this.state.errors?.password}</span>}
      </div>
      <LoginButton id={this.state.id} errors={this.state.errors}/>
      
      <RegisterButton email = {this.state.email} password = {this.state.password}/>
    </form>
  );
}
};
