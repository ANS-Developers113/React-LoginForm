import React, { Component } from "react";
import axios from 'axios';
import { Form, Button, Container,Row,Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
Form {
    
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    width: 100%;
    border-radius:20px;
}

h1 {
    text-align: center;
}

#loginForm {
    border-radius: 20px;
    border: solid;
    background-color: #FFF;
    margin : auto;
}

#loginFormContainer{
    margin-top : 50px;
    margin-bottom : 50px;
}

`;


export default class Login extends Component {
  
    constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
        responseMessage:''
      }
    }
      
    handleEmailChange=(event)=>{
      this.setState({
          username : event.target.value
      })
    }

    handlepasswordChange=(event)=>{
      this.setState({
          password : event.target.value
      })
    }

    handleSubmit=(event)=>{
      event.preventDefault();
      const {username, password} = this.state;

       // send username and password to server
      axios.post("http://localhost:8000/login" , {username,password}).then(res=>{
        
        this.setState({responseMessage : res.data})
        let response = this.state.responseMessage;

        if(response === "Invalid Username"){
          alert("Enter a Valid Username and password");
          this.setState({username : ""});
          this.setState({password : ""});
        }
        else {
          const serverReceivedToken=response.token; // successfull login
          sessionStorage.setItem('token', serverReceivedToken); 
          this.props.history.push("/profile"); // Redirect to profile
        }

       });  // End of axios function
    } //End of handleSubmit
    
      render(){
        return (
          <Styles>
            <Container id="loginFormContainer">
                <Row>
                    <Col/>
                    <Col id="loginForm" md={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <h1><b>Sign Up</b></h1>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><b>Email address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}
                                value={this.state.username}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.handlepasswordChange} 
                                value={this.state.password}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
          </Styles>

        );
      }
}
