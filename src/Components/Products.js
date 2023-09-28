import React,{useEffect,useState} from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Products (){
    const navigate = useNavigate()
    const [res,setResult]=useState([]);
    useEffect(()=>{
        fetch('api/products')
        .then((res)=>{ res.json().then((resp)=>{
                setResult(resp) 
                getProducts()
            })
        })
    },[])
    async function getProducts(){
        let result = await fetch('api/products')
        result = await result.json();
        setResult(result)
    }
    async function deleteProduct(id){
        const headers = {
            'mode':'cors',
            'Accept':'*/*',
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
        }
        let result = await fetch("api/deleteProduct",{
            method:'POST',
            headers:headers,
            body:id
        });
        result = await result.json();
        getProducts()
        if(result){
            navigate("/products")
        }
    }
    return(
        <div>
            <Row style={{width:"100%"}}><Col sm={2}><h3 className="mb-3">Product List</h3></Col><Col  sm={8}></Col>
                <Col sm={1} className="mb-3"><Link to={"/add"}><Button className="btn-rightbtn btn-dark btn-sm float-right mb-3" style={{margin:"10px"}}>+Add</Button></Link></Col>
            </Row>
            <center>
            <Table className="d" striped bordered hover variant="grey" responsive="sm">
                <thead>
                    <th style={{width:"2%"}}>#</th>
                    <th style={{width:"10%"}}>Name</th>
                    <th style={{width:"10%"}}>Brand</th>
                    <th style={{width:"10%"}}>Category</th>
                    <th style={{width:"10%"}}>SKU</th>
                    <th style={{width:"5%"}}>Price</th>
                    <th style={{width:"35%"}}>Description</th>
                    <th>Image</th>
                    <th colSpan={2}>Action</th>
                </thead>
                <tbody>
                    {
                        res.map((item,i)=>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>{item.sku}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td className="d"><img src={item.image} width={100} /></td>
                            <td><Link to={"/update/"+item.id}><Button className="btn-sm btn-dark">edit</Button></Link></td>
                            <td><Button onClick={()=>deleteProduct(item.id)} className="btn-sm btn-dark">delete</Button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            </center>
        </div>
    )
}
export default Products;