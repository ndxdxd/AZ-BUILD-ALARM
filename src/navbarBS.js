import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Router, Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import lock from "./lock.png";
import React from 'react'
import System from "./System.js"
import About from "./About.js"
import User from "./User.js"

export const NavBarBootstrap = () =>(
    <Navbar bg = "myGray" variant ="dark" sticky = "top" expand = "md" collapseOnSelect>
        <Navbar.Brand>
        <img src ={lock} width ="56px" height = "56px" />{' '}
        Dorm Alarm
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav>
                <Nav.Link as={Link} to = "/">System Logs</Nav.Link>
                <Nav.Link as={Link} to = "/User">User Options</Nav.Link>
                <Nav.Link as={Link} to = "/About">About Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)