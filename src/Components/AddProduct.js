import React, { useState } from "react";
import {Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function AddProduct (){
    let navigate = useNavigate();
    const [pname, setPname] = useState("")
    const [pbrand, setPbrand] = useState("")
    const [pcategory, setPcategory] = useState("")
    const [pprice, setPprice] = useState("")
    const [psku, setPsku] = useState("")
    const [pdescription, setPdescription] = useState("")
    const [pimage, setPimage] = useState("")
    async function saveProduct(){
        let item = {pname,pbrand,pcategory,pprice,psku,pdescription,pimage}
        const headers = {
            'mode':'cors',
            'Accept':'*/*',
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
        }
        let result = await fetch("api/createProducts",{
            method:'POST',
            headers:headers,
            body:JSON.stringify(item)
        });
        result = await result.json();
        if(result){
            navigate("/products")
        }
    }
    return(
        <div>
            <center><Form className="shadow p-3 mb-5 bg-white rounded" style={{width:"80%", margin:"20px",padding:20,border:'0px solid #001111'}}>
                <Form.Group>
                <Form.Label className="form-label mb-4" for=""><h4>Add Product Details</h4></Form.Label>
                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Name</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" onChange={(e)=>setPname(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Brand</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" onChange={(e)=>setPbrand(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Category</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" onChange={(e)=>setPcategory(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Sku</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" onChange={(e)=>setPsku(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Price</Form.Label></Col>
                    <Col><Form.Control type="number" id="form6Example1" className="form-control" onChange={(e)=>setPprice(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Image</Form.Label></Col>
                    <Col><Form.Control type="file" id="form6Example1" className="form-control" onChange={(e)=>setPimage(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                <Col sm={2}><Form.Label className="form-label" for="form6Example7">Description</Form.Label></Col>
                    <Col><textarea className="form-control" id="form6Example7" rows="4" onChange={(e)=>setPdescription(e.target.value)}></textarea></Col>
                    
                </Row><br />

                <Button onClick={saveProduct} className="btn btn-primary btn-block mb-4">Place order</Button>
                </Form.Group>
                </Form></center>
        </div>
    )
}
export default AddProduct;