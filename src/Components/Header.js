import React from "react";
import { Navbar, Dropdown, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logout(){
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">ECOM</Navbar.Brand>
                <Navbar bg="dark" data-bs-theme="dark" className="navbar_wraper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Row><Col sm={6}><Link to={"/users"}>Users</Link>
                                <Link to={"/products"}>Products</Link>
                                <Link to={"/brand"}>Brand</Link>
                                <Link to={"/category"}>Category</Link></Col><Col>
                                <Dropdown title={user && user.data[0].name} className="d-flex" style={{float: 'right', textAlign:"right"}}>
                                    <Dropdown.Toggle className="d-flex" variant="dark" style={{float: 'right', textAlign:"right",marginLeft:"1200%"}}>
                                        {user.data[0].name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{marginLeft:"1150%"}}>
                                        <Dropdown.Item>Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={logout} >Logout</Dropdown.Item>
                                        <Dropdown.Item >Others</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></Col></Row>
                            </> :
                            <>
                                <Link to={"/login"}>Login</Link>
                                <Link to={"/register"}>Register</Link>
                            </>
                    }
                </Navbar>
            </Navbar>
        </div>
    )
}
export default Header;