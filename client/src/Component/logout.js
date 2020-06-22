import React from "react";
import {Redirect} from "react-router-dom";


export default class Logout extends React.Component{

    constructor(){
        super();
        sessionStorage.removeItem("token"); // token remove
    }

    render(){
        return <Redirect to="/" /> //to profile
    }
}