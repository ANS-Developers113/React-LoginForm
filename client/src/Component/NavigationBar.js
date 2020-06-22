import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Menu} from './menudata';

export const NavigationBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="sm" >
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                    {Menu.map((data, key) => {
                        return (
                            <Nav.Item key={key}>
                                <Nav.Link href={data.url}>
                                {
                                    data.name
                                }
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};   