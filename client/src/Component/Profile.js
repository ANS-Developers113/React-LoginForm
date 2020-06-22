import React, { Component } from "react";
import {NavigationBar} from './NavigationBar';

export default class Profile extends Component {
    render(){
        return(
            <>
                <NavigationBar/>
                <div>
                    <h1>Welcome to Profile</h1>
                </div>
            </>
        )
    }
}
    
 