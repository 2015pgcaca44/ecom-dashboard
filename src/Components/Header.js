import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header (){
    return(
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Navbar.Brand href="#home">ECOM</Navbar.Brand>
                <Navbar bg="primary" data-bs-theme="dark" className="navbar_wraper">
                    <Link to={"/users"}>Users</Link>
                    <Link to={"/add"}>Add Product</Link>
                    <Link to={"/update"}>Update Product</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                    <Link to={"/logout"}>Logout</Link>
                </Navbar>
            </Navbar>
        </div>
    )
}
export default Header;