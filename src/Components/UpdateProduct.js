import React, { useEffect, useState } from "react";
import {Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
function UpdateProduct (params){
    let navigate = useNavigate();
    const [pname, setPname] = useState("")
    const [pbrand, setPbrand] = useState("")
    const [pcategory, setPcategory] = useState("")
    const [pprice, setPprice] = useState("")
    const [psku, setPsku] = useState("")
    const [pdescription, setPdescription] = useState("")
    const [pimage, setPimage] = useState("")
    const [pid, setPid] = useState("")

    // const [rname, setRname] = useState("")
    // const [rbrand, setRbrand] = useState("")
    // const [rcategory, setRcategory] = useState("")
    // const [rprice, setRprice] = useState("")
    // const [rsku, setRsku] = useState("")
    // const [rdescription, setRdescription] = useState("")
    // const [rimage, setRimage] = useState("")

    let idp = useParams().id
    useEffect(()=>{
        fetch('/api/getProducts/'+idp)
        .then((res)=>{ 
            res.json().then((resp)=>{
            setPname(resp.data.name)
            setPbrand(resp.data.brand)
            setPcategory(resp.data.category)
            setPprice(resp.data.price)
            setPsku(resp.data.price)
            setPdescription(resp.data.description)
            setPimage(resp.data.image)
            setPid(resp.data.id)
            })
        })
    },[])
    //console.log(idp)
    async function updateProduct(){
        let item = {pid,pname,pbrand,pcategory,pprice,psku,pdescription,pimage}
        const headers = {
            'mode':'cors',
            'Accept':'*/*',
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
        }
        let result = await fetch("/api/updateProduct",{
            method:'POST',
            headers:headers,
            body:JSON.stringify(item)
        });
        result = await result.json();
        
        if(result.message=="Updated success"){
            navigate("/products")
        }
    }
    return(
        <div>
            <center><Form className="shadow p-3 mb-5 bg-white rounded" style={{width:"80%", margin:"20px",padding:20,border:'0px solid #001111'}}>
                <Form.Group>
                <Form.Label className="form-label mb-4" for=""><h4>Update Product Details</h4></Form.Label>
                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Name</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" value={pname} onChange={(e)=>setPname(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Brand</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" defaultValue={pbrand} onChange={(e)=>setPbrand(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Category</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" defaultValue={pcategory} onChange={(e)=>setPcategory(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Sku</Form.Label></Col>
                    <Col><Form.Control type="text" id="form6Example1" className="form-control" defaultValue={psku} onChange={(e)=>setPsku(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Price</Form.Label></Col>
                    <Col><Form.Control type="number" id="form6Example1" className="form-control" defaultValue={pprice} onChange={(e)=>setPprice(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                    <Col sm={2}><Form.Label className="form-label" for="form6Example1">Product Image</Form.Label></Col>
                    <Col><Form.Control type="file" id="form6Example1" className="form-control" defaultValue={pimage} onChange={(e)=>setPimage(e.target.value)} ></Form.Control></Col>
                </Row><br />

                <Row>
                <Col sm={2}><Form.Label className="form-label" for="form6Example7">Description</Form.Label></Col>
                    <Col><textarea className="form-control" id="form6Example7" rows="4" defaultValue={pdescription} onChange={(e)=>setPdescription(e.target.value)}></textarea></Col>
                    
                </Row><br />

                <Button onClick={updateProduct} className="btn btn-dark btn-block mb-4">Update Product</Button>
                </Form.Group>
                </Form></center>
        </div>
    )
}
export default UpdateProduct;